"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";

function toEmbedUrl(url) {
  if (!url) return "";
  if (url.includes("youtube.com/watch")) {
    return url.replace("watch?v=", "embed/");
  }
  if (url.includes("youtu.be/")) {
    return url.replace("youtu.be/", "www.youtube.com/embed/");
  }
  return url;
}

export default function SeasonCarousel({ seasons }) {
  const [active, setActive] = useState(0);
  const [showTrailer, setShowTrailer] = useState(false);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const touchEndRef = useRef({ x: 0, y: 0 });

  const currentSeason = seasons[active];

  const embedUrl = useMemo(() => toEmbedUrl(currentSeason.trailer), [currentSeason.trailer]);

  const handleNav = (direction) => {
    setShowTrailer(false);
    setActive((prev) => {
      if (direction === "next") {
        return (prev + 1) % seasons.length;
      }
      if (direction === "prev") {
        return prev === 0 ? seasons.length - 1 : prev - 1;
      }
      return prev;
    });
  };

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY };
    touchEndRef.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchMove = (e) => {
    const t = e.touches[0];
    touchEndRef.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd = () => {
    const dx = touchEndRef.current.x - touchStartRef.current.x;
    const dy = touchEndRef.current.y - touchStartRef.current.y;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    if (absDx > 50 && absDy < 60) {
      handleNav(dx < 0 ? "next" : "prev");
    }
  };

  return (
    <div className="carousel" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <button
        type="button"
        className="carousel__control carousel__control--prev"
        onClick={() => handleNav("prev")}
        aria-label="Season sebelumnya"
      >
        &#10094;
      </button>

      <article className="carousel__slide" key={currentSeason.title}>
        <div className="carousel__image">
          <Image
            src={currentSeason.image}
            alt={`Poster ${currentSeason.title}`}
            width={420}
            height={620}
            sizes="(max-width: 900px) 320px, 420px"
          />
        </div>
        <div className="carousel__content">
          <span>{currentSeason.era}</span>
          <h2>{currentSeason.title}</h2>
          <p>{currentSeason.synopsis}</p>

          {!!currentSeason.trailer && (
            <div className="carousel__actions">
              <button type="button" onClick={() => setShowTrailer((value) => !value)}>
                {showTrailer ? "Tutup Trailer" : "Tonton Trailer"}
              </button>
              <a href={currentSeason.trailer} target="_blank" rel="noreferrer">
                Buka di YouTube
              </a>
            </div>
          )}

          {showTrailer && embedUrl && (
            <div className="carousel__trailer">
              <iframe
                title={`Trailer ${currentSeason.title}`}
                src={embedUrl}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </article>

      <button
        type="button"
        className="carousel__control carousel__control--next"
        onClick={() => handleNav("next")}
        aria-label="Season berikutnya"
      >
        &#10095;
      </button>

      <div className="carousel__dots" role="tablist" aria-label="Pilih season">
        {seasons.map((season, index) => (
          <button
            type="button"
            key={season.title}
            className={`carousel__dot${index === active ? " carousel__dot--active" : ""}`}
            onClick={() => {
              setShowTrailer(false);
              setActive(index);
            }}
            aria-label={`Lihat ${season.title}`}
            aria-pressed={index === active}
          />
        ))}
      </div>

      <div className="carousel__mobileNav" aria-label="Navigasi carousel mobile">
        <button type="button" onClick={() => handleNav("prev")} aria-label="Season sebelumnya">
          &#10094; Sebelumnya
        </button>
        <button type="button" onClick={() => handleNav("next")} aria-label="Season berikutnya">
          Berikutnya &#10095;
        </button>
      </div>
    </div>
  );
}
