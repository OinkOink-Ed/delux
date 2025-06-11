import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import BurgerMenu from "./BurgerMenu";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex h-24 w-full px-28 justify-between items-center bg-white fixed z-10">
      <Link to={"/"}>
        <img src="/img/Logo.jpg" alt="" className=" pointer max-md: h-18" />
      </Link>

      <div className="flex gap-4 max-[900px]:hidden">
        <Link
          to={"/"}
          className="self-center font-roboto-slab hover:text-blue-400"
        >
          Главная
        </Link>

        <Link
          to="/#About"
          className="self-center font-poppins hover:text-blue-400"
        >
          О нас
        </Link>
        {/* <Link to={"meet-the-team"} className="self-center">
          Meet The Team
        </Link> */}
        <Link to={"projects"} className="self-center hover:text-blue-400">
          Проекты
        </Link>
        <Link to={"/#ContactUs"} className="self-center hover:text-blue-400">
          Контакты
        </Link>
        {/* <img src="./" alt="Соц" className="self-center"></img> */}
      </div>
      <BurgerMenu ref={burgerRef} func={toggleMenu} open={isOpen} />
      <div
        ref={menuRef}
        className={` bg-white shadow-lg transition-all duration-300 ease-in-out top-24 right-0 w-52 absolute ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-2 h-full py-3">
          <Link
            to={"/"}
            className="self-center font-roboto-slab hover:text-blue-400"
            onClick={closeMenu}
          >
            Главная
          </Link>
          <Link
            to="/#About"
            className="self-center font-poppins hover:text-blue-400"
            onClick={closeMenu}
          >
            О нас
          </Link>
          <Link
            to={"projects"}
            className="self-center hover:text-blue-400"
            onClick={closeMenu}
          >
            Проекты
          </Link>
          <Link
            to={"/#ContactUs"}
            className="self-center hover:text-blue-400"
            onClick={closeMenu}
          >
            Контакты
          </Link>
        </div>
      </div>
    </nav>
  );
}
