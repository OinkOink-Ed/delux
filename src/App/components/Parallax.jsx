import { useEffect } from "react";

export function Parallax() {
  useEffect(() => {
    const isReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isReducedMotion) {
      // Отключаем параллакс для пользователей с prefers-reduced-motion
      return;
    }

    let rafId;
    const handleScroll = () => {
      // Отменяем предыдущий requestAnimationFrame
      cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const parallaxElements = document.querySelectorAll(
          ".parallax-container"
        );
        parallaxElements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const offset = rect.top + window.scrollY;
          const scroll = (window.scrollY - offset) * 0.3; // Скорость параллакса
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.querySelector(".parallax-bg").style.setProperty(
              "--scroll",
              `${scroll}px`
            );
          } else {
            el.querySelector(".parallax-bg").style.setProperty(
              "--scroll",
              "0px"
            );
          }
        });
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
