import { useEffect } from "react";
import { History } from "../ui/History";
import { Projects } from "../ui/Projects";
import { ContactUs } from "../ui/ContactUs";
import { useLocation } from "react-router";

export default function MainPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <div className="flex bg-[url(/img/Главная_1.jpeg)] bg-cover h-[50rem] bg-fixed bg-no-repeat items-center justify-center mt-24">
        <div className="flex flex-col gap-8 z-[1] relative px-8">
          <div className="flex flex-col text-white text-center  gap-8">
            <h1 className="text-8xl">SK Deluxo</h1>
            <h3 className="text-2xl w-9/12 self-center font-share-tech-mono">
              Компания выполняет широкий спектр
              строительно-монтажных работ. Основные направления компании: ремонт
              и отделка помещений, строительство и реконструкция офисных зданий
              и сооружений любой сложности, капитальный ремонт.
            </h3>
          </div>
        </div>
      </div>
      <Projects />
      <div className="flex bg-[url(/img/Главная_2.jpeg)] bg-fixed bg-cover h-[50rem] items-center justify-center"></div>
      <History />
      <div className="flex bg-[url(/img/Главная_3.jpeg)] bg-fixed bg-cover h-[50rem] items-center justify-center"></div>
      <ContactUs />
    </div>
  );
}
