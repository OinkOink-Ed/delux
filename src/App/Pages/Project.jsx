import { useEffect } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router";
import { useState } from "react";
import { EvopartFrame } from "../components/EvopartFrame";
import { IsolatorFrame } from "../components/IsolatorFrame";
import { KotelnayaFrame } from "../components/KotelnayaFrame";
import { useRef } from "react";

//Нужно потом изучить кодовую базу

export default function Project() {
  const params = useParams();
  const { state } = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const autoScrollRef = useRef(null)

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

    const getVisibleImages = () => {
      if (window.innerWidth < 640) return 1; // < sm: 1 изображение (w-full)
      if (window.innerWidth < 1024) return 2; // sm-md: 2 изображения (w-1/2)
      return 3; // lg+: 3 изображения (w-1/3)
    };

    const updateCarousel = () => {
      const visibleImages = getVisibleImages();
      // Сдвиг в процентах в зависимости от количества видимых изображений
      const offset = 100 / visibleImages;
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

    // Обработчики событий для паузы автопрокрутки
  const handleMouseEnter = () => {
    clearInterval(autoScrollRef.current);
  };

  const handleMouseLeave = () => {
    if (!fullscreenImage) { // Запускаем только если полноэкранный режим не активен
        autoScrollRef.current = setInterval(() => {
          handleNext();
        }, 2000);
      }
  };

  // Поддержка сенсорных устройств (опционально)
  const handleTouchStart = () => {
    clearInterval(autoScrollRef.current);
  };

  const handleTouchEnd = () => {
    if (!fullscreenImage) { // Запускаем только если полноэкранный режим не активен
        autoScrollRef.current = setInterval(() => {
          handleNext();
        }, 2000);
      }
  };

  if (!fullscreenImage) {
      autoScrollRef.current = setInterval(() => {
        handleNext();
      }, 2000);
    }

    // Инициализация
    updateCarousel();

    prevButton.addEventListener("click", handlePrev);
    nextButton.addEventListener("click", handleNext);

    // Обновляем карусель при изменении размера окна
    window.addEventListener("resize", updateCarousel);

    carousel.addEventListener("mouseenter", handleMouseEnter);
  carousel.addEventListener("mouseleave", handleMouseLeave);
  carousel.addEventListener("touchstart", handleTouchStart);
  carousel.addEventListener("touchend", handleTouchEnd);

    // Очистка обработчиков событий
    return () => {
      prevButton.removeEventListener("click", handlePrev);
    nextButton.removeEventListener("click", handleNext);
    carousel.removeEventListener("mouseenter", handleMouseEnter);
    carousel.removeEventListener("mouseleave", handleMouseLeave);
    carousel.removeEventListener("touchstart", handleTouchStart);
    carousel.removeEventListener("touchend", handleTouchEnd);
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

  const ArrayOfPictures = Array.from({ length: state.count }, (_, index) => ({
    src: `${params.id.substring(1)}-${index + 1}`,
  }));

  return (
    <div className="flex flex-col">
      <div
        className={`flex bg-cover h-[30rem] w-full bg-fixed bg-no-repeat`}
        style={{ backgroundImage: `url(/img/${params.id.substring(1).replaceAll(' ', '')}.jpg)` }}
      ></div>
      <div className="flex w-full py-10 flex-col gap-10 lg:flex-row lg:gap-0">
        <div className="flex-[3] self-center justify-items-center 2xl:pl-30 xl:pl-20 px-10">
          <h1 className="max-w-[600px] text-4xl text-center font-share-tech-mono">{params.id.substring(1)}</h1>
          <br />
          <p className=" max-w-[600px] text-center font-share-tech-mono">{state.address}</p>
        </div>
        <div className="flex-[6] self-center justify-items-center px-10">
          <p className="max-w-[600px] font-share-tech-mono">{state.p}</p>
        </div>
      </div>
      <div className="relative w-full px-12 mx-auto my-8">
        {/* Контейнер карусели */}
        <div className="overflow-hidden">
          <div className="carousel flex transition-transform duration-500 gap-6 ease-in-out">
            {/* Изображения */}
            {ArrayOfPictures.map((item) => (
              <div
                className="carousel-image flex-none box-border h-[30rem] overflow-hidden w-full md:w-[50%] lg:max-w-[32%]"
                key={item.src}
              >
                <img
                  src={`/img/${params.id.substring(1)}/${item.src}.jpeg`}
                  alt="Image 1"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
                  onClick={() => handleImageClick(`/img/${params.id.substring(1)}/${item.src}.jpeg`)}
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
        {params.id.substring(1) === "EVOPART BY BENEFIT SOCHI" ? <EvopartFrame /> : null}
        {params.id.substring(1) === "Котельная" ? <KotelnayaFrame/> : null}
        {params.id.substring(1) === "Изолятор" ? <IsolatorFrame/> : null}
      </div>
      
    </div>
  );
}
