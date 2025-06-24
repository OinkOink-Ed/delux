import { useEffect } from "react";
import { useState } from "react";
import { KotelnayaFrame } from "../components/KotelnayaFrame";
import { useRef } from "react";
import { Parallax } from "../components/Parallax";

//Нужно потом изучить кодовую базу

export default function ProjectKotelnaya() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setFullscreenImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");
    const images = document.querySelectorAll(".carousel-image");

    if (!carousel || !prevButton || !nextButton) return;

    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    // Скрываем кнопки на сенсорных устройствах
    if (hasTouch) {
      prevButton.style.display = "none";
      nextButton.style.display = "none";
    } else {
      prevButton.style.display = "flex"; // Восстанавливаем, если не сенсорное
      nextButton.style.display = "flex";
    }

    let startX = 0; // Начальная позиция касания
    let currentTranslateX = 0; // Текущее смещение
    let isSwiping = false;
    const threshold = 50; // Порог свайпа в пикселях

    const getVisibleImages = () => {
      if (window.innerWidth < 766) return 1; // < sm: 1 изображение (w-full)
      if (window.innerWidth < 1024) return 2; // sm-md: 2 изображения (w-1/2)
      return 3; // lg+: 3 изображения (w-1/3)
    };

    const updateCarousel = () => {
      const gapPx = 24; // gap-6 = 1.5rem = 24px
      const carouselWidth = carousel.offsetWidth;
      const itemWidth = carousel.children[0].offsetWidth + gapPx; // Ширина элемента + gap
      const offset = (itemWidth / carouselWidth) * 100;
      carousel.style.transform = `translateX(-${currentIndex * offset}%)`;
    };

    const handlePrev = () => {
      setCurrentIndex((prev) => {
        const visibleImages = getVisibleImages();
        return prev > 0 ? prev - 1 : Math.max(0, images.length - visibleImages);
      });
    };

    const handleNext = () => {
      setCurrentIndex((prev) => {
        const visibleImages = getVisibleImages();
        return prev < images.length - visibleImages ? prev + 1 : 0;
      });
    };

    // Обработчики свайпа
    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      currentTranslateX = carousel.style.transform
        ? parseFloat(carousel.style.transform.match(/-?[\d.]+/)[0])
        : 0;
      isSwiping = true;
      clearInterval(autoScrollRef.current); // Пауза автопрокрутки
      carousel.style.transition = "none"; // Убираем анимацию для плавного движения
    };

    const handleTouchMove = (e) => {
      if (!isSwiping) return;
      const currentX = e.touches[0].clientX;
      const diffX = currentX - startX;

      // Убираем ограничения движения, чтобы позволить свайп за границы
      e.preventDefault(); // Блокируем вертикальный скролл
      const carouselWidth = carousel.offsetWidth;
      const newTranslateX = currentTranslateX + (diffX / carouselWidth) * 100;
      carousel.style.transform = `translateX(${newTranslateX}%)`;
    };

    const handleTouchEnd = (e) => {
      if (!isSwiping) return;
      isSwiping = false;
      carousel.style.transition = "transform 0.5s ease-in-out";

      const endX = e.changedTouches[0].clientX;
      const diffX = endX - startX;
      const carouselWidth = carousel.offsetWidth;
      const gapPx = 24;
      const itemWidth = carousel.children[0].offsetWidth + gapPx;
      const offset = (itemWidth / carouselWidth) * 100;
      let newIndex = currentIndex;

      if (Math.abs(diffX) > threshold) {
        if (diffX < 0) {
          // Свайп влево
          newIndex = currentIndex + 1;
          if (newIndex >= images.length - getVisibleImages()) {
            // Достигли конца, переходим в начало
            newIndex = 0;
            carousel.style.transition = "none"; // Убираем анимацию
            carousel.style.transform = `translateX(0%)`; // Мгновенно в начало
            setTimeout(() => {
              carousel.style.transition = "transform 0.5s ease-in-out"; // Возвращаем анимацию
            }, 0);
          }
        } else if (diffX > 0) {
          // Свайп вправо
          newIndex = currentIndex - 1;
          if (newIndex < 0) {
            // Достигли начала, переходим в конец
            newIndex = images.length - getVisibleImages();
            carousel.style.transition = "none"; // Убираем анимацию
            carousel.style.transform = `translateX(-${newIndex * offset}%)`; // Мгновенно в конец
            setTimeout(() => {
              carousel.style.transition = "transform 0.5s ease-in-out"; // Возвращаем анимацию
            }, 0);
          }
        }
      }

      setCurrentIndex(newIndex);

      if (!fullscreenImage) {
        autoScrollRef.current = setInterval(() => {
          handleNext();
        }, 1000);
      }
    };

    // Обработчики для паузы автопрокрутки
    const handleMouseEnter = () => {
      clearInterval(autoScrollRef.current);
    };

    const handleMouseLeave = () => {
      if (!fullscreenImage) {
        autoScrollRef.current = setInterval(() => {
          handleNext();
        }, 1000);
      }
    };

    if (!fullscreenImage) {
      autoScrollRef.current = setInterval(() => {
        handleNext();
      }, 1000);
    }

    // Инициализация
    updateCarousel();

    prevButton.addEventListener("click", handlePrev);
    nextButton.addEventListener("click", handleNext);
    carousel.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    carousel.addEventListener("touchmove", handleTouchMove, { passive: false });
    carousel.addEventListener("touchend", handleTouchEnd);
    carousel.addEventListener("mouseenter", handleMouseEnter);
    carousel.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", updateCarousel);

    return () => {
      prevButton.removeEventListener("click", handlePrev);
      nextButton.removeEventListener("click", handleNext);
      carousel.removeEventListener("touchstart", handleTouchStart);
      carousel.removeEventListener("touchmove", handleTouchMove);
      carousel.removeEventListener("touchend", handleTouchEnd);
      carousel.removeEventListener("mouseenter", handleMouseEnter);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", updateCarousel);
      clearInterval(autoScrollRef.current);
    };
  }, [currentIndex, fullscreenImage]);

  // Обработчик клика по изображению
  const handleImageClick = (src) => {
    setFullscreenImage(src);
  };

  // Закрытие полноэкранного режима
  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  const ArrayOfPictures = Array.from({ length: 10 }, (_, index) => ({
    src: `Котельная-${index + 1}`,
  }));

  return (
    <div className="flex flex-col">
      <Parallax />
      <div className="parallax-container relative overflow-hidden md:h-[50rem] h-[30rem] flex items-center justify-center mt-24">
        <div
          className="parallax-bg absolute inset-0 bg-[url(/img/Котельная.jpg)] md:bg-[url(/img/Котельная.jpg)] bg-cover bg-no-repeat h-[120%] w-full transform-gpu"
          style={{
            transform: "translateY(var(--scroll))",
            willChange: "transform",
          }}
        ></div>
      </div>
      <div className="flex w-full py-10 flex-col gap-10 lg:flex-row lg:gap-0">
        <div className="flex-[3] self-center justify-items-center 2xl:pl-30 xl:pl-20 px-10">
          <h1 className="max-w-[600px] text-4xl text-center font-share-tech-mono">
            Котельная
          </h1>
          <br />
          <p className=" max-w-[600px] text-center font-share-tech-mono">
            Краснодарский край, г. Сочи, Адлерский р-н, с. Весёлое, ул.
            Академика Лапина, д. 177
          </p>
        </div>
        <div className="flex-[6] self-center justify-items-center px-10">
          <p className="max-w-[600px] font-share-tech-mono">
            Котельная газовая расположенная в Научно-исследовательском центре
            института медицинской приматологии в Адлерском районе города Сочи.
            На данном объекте был выполнен косметическо-восстановительный ремонт
            всей котельной, включая фасады, остекления, внутрення отделка и
            замена кровельного покрытия.
          </p>
        </div>
      </div>
      <div className="relative w-full px-12 mx-auto my-8">
        {/* Контейнер карусели */}
        <div className="overflow-hidden">
          <div className="carousel flex transition-transform duration-500 gap-6 ease-in-out">
            {/* Изображения */}
            {ArrayOfPictures.map((item) => (
              <div
                className="carousel-image flex-none box-border h-[30rem] overflow-hidden w-full md:w-[50%] lg:max-w-[33%]"
                key={item.src}
              >
                <img
                  src={`/img/Котельная/${item.src}.jpeg`}
                  alt="Image 1"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
                  onClick={() =>
                    handleImageClick(`/img/Котельная/${item.src}.jpeg`)
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* Сделать карусель ещё и автоматически крутящейся */}

        {/* Кнопки листания */}
        <button
          className="carousel-prev absolute top-1/2 left-20 -translate-y-1/2 cursor-pointer bg-black/50 text-white w-16 h-16 flex items-center justify-center hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="carousel-next absolute top-1/2 right-20 -translate-y-1/2 cursor-pointer bg-black/80 text-white w-16 h-16 flex items-center justify-center hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={handleCloseFullscreen}
        >
          <span
            className="absolute top-4 right-4 text-white text-4xl cursor-pointer"
            onClick={handleCloseFullscreen}
          >
            ×
          </span>
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="max-w-[90%] max-h-[90%] object-contain"
          />
        </div>
      )}

      {/* Добавим выполненные работы для объекта */}
      <div className="self-center pb-10">
        <KotelnayaFrame />
      </div>
    </div>
  );
}
