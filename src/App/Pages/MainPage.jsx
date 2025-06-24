import { useEffect } from "react";
import { History } from "../ui/History";
import { Projects } from "../ui/Projects";
import { ContactUs } from "../ui/ContactUs";
import { useLocation } from "react-router";
import { Parallax } from "../components/Parallax";

export default function MainPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        console.log("К элементу:", id);
      }
    }
  }, [location]);

  return (
    <div>
      {/* Компонент для управления параллаксом */}
      <Parallax />

      {/* Секция 1: Главный баннер */}
      <div className="parallax-container relative overflow-hidden md:h-[50rem] h-[30rem] flex items-center justify-center mt-24">
        <div
          className="parallax-bg absolute inset-0 bg-[url(/img/Главная_1_mini.jpg)] md:bg-[url(/img/Главная_1.jpeg)] bg-cover bg-no-repeat h-[120%] w-full transform-gpu"
          style={{
            transform: "translateY(var(--scroll))",
            willChange: "transform",
          }}
        ></div>
        <div className="flex flex-col gap-8 z-[1] relative px-8">
          <div className="flex flex-col text-white text-center gap-8">
            <h1 className="sm:text-8xl text-4xl">SK Deluxo</h1>
            <h3 className="md:text-xl lg:text-2xl sm:text-xl text-lg w-9/12 mx-auto font-share-tech-mono 2xl:mb-50 md:mb-80 sm:mb-40">
              Компания выполняет широкий спектр строительно-монтажных работ.
              Основные направления компании: ремонт и отделка помещений,
              строительство и реконструкция офисных зданий и сооружений любой
              сложности, капитальный ремонт.
            </h3>
          </div>
        </div>
      </div>

      {/* Секция Projects */}
      <Projects />

      {/* Секция 2: Второй баннер */}
      <div className="parallax-container relative overflow-hidden md:h-[50rem] h-[30rem] flex items-center justify-center">
        <div
          className="parallax-bg absolute inset-0 bg-[url(/img/Главная_2_mini.jpg)] md:bg-[url(/img/Главная_2.jpg)] bg-cover bg-no-repeat h-[120%] w-full transform-gpu"
          style={{
            transform: "translateY(var(--scroll))",
            willChange: "transform",
          }}
        ></div>
      </div>

      {/* Секция History */}
      <History />

      {/* Секция 3: Третий баннер */}
      <div className="parallax-container relative overflow-hidden md:h-[50rem] h-[30rem] flex items-center justify-center">
        <div
          className="parallax-bg absolute inset-0 bg-[url(/img/Главная_3_mini.jpg)] md:bg-[url(/img/Главная_3.jpg)] bg-cover bg-no-repeat h-[120%] w-full transform-gpu"
          style={{
            transform: "translateY(var(--scroll))",
            willChange: "transform",
          }}
        ></div>
      </div>

      {/* Секция ContactUs */}
      <ContactUs />
    </div>
  );
}
