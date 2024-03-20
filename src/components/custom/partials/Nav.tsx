/**
 * hooks
 */
import { useState } from "react";
import { HoverServices } from "./HoverServices";

/**
 * menu 
*/
import { Menu } from "./Menu";

/**
 * components
 *  */

import { Link } from "react-router-dom";

const Nav = (): React.ReactNode => {
  const [hidden, setHidden] = useState(false);
  const handleMouseToggle = (state: boolean) => {
    return setHidden(state);
  };

  return (
    <>
      <nav className="xs:hidden mdx:flex relative w-full h-[100px] flex justify-between items-center">
        <div className="flex gap-3 items-center ">
          <img
            className="w-[50px]"
            src="/images/logo.png"
            alt="logo"
            loading="lazy"
          />
          <Link to="/" className="text-xl font-bold">DIELER AGENCY</Link>
        </div>

        <div
          className="flex gap-2 items-center cursor-pointer"
          onMouseEnter={() => handleMouseToggle(true)}
        >
          <a
            href="#"
            className="no-underline 2xl:text-xl xl:text-md transition hover:opacity-70"
          >
            SERVICIOS
          </a>
          <img
            onClick={() => handleMouseToggle(false)}
            src="/icons/arrow-down.svg"
            alt="Dropdown"
            className="w-8 transition hover:opacity-70"
          />
          {hidden && <HoverServices />}
        </div>

        <div>
          <a
            href="#"
            className="no-underline 2xl:text-xl xl:text-md transition hover:opacity-70"
          >
            BLOG
          </a>
        </div>

        <div>
          <a
            href="#"
            className="no-underline 2xl:text-xl xl:text-md transition hover:opacity-70"
          >
            ¿QUIENES SOMOS?
          </a>
        </div>
        <div className="border-white">
          <a
            href="#contact"
            className="2xl:text-xl xl:text-md no-underline bg-transparent py-1 px-5 border border-yellow-primary rounded-3xl text-yellow-primary font-bold transition hover:opacity-70"
          >
            CONTACTANOS
          </a>
        </div>
      </nav>
      <Menu />
    </>
  );
};

export { Nav };
