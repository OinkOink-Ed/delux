import { forwardRef } from "react";
import PropTypes from "prop-types";

const BurgerMenu = forwardRef(function BurgerMenu({ open, func }, ref) {
  return (
    <div
      className="w-[30px] cursor-pointer hidden max-[900px]:block"
      onClick={func}
      ref={ref}
    >
      <div
        className={`block w-full h-[3px] my-1.5 bg-black transition ease-in-out ${open ? "rotate-45 translate-y-[6px]" : ""}`}
      ></div>
      <div
        className={`block w-full h-[3px] my-1.5 bg-black transition delay-300 ease-in-out ${open ? "hidden" : ""}`}
      ></div>
      <div
        className={`block w-full h-[3px] my-1.5 bg-black transition ease-in-out ${open ? "-rotate-45 translate-y-[-3px]" : ""}`}
      ></div>
    </div>
  );
});

BurgerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  func: PropTypes.func.isRequired,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default BurgerMenu;
