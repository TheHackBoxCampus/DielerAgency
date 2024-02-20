/**
 * hooks 
 */
import { useState } from "react";
import { HoverServices } from "./HoverServices";

const Nav = (): React.ReactNode => {
  const [hidden, setHidden] = useState(false); 
  const handleMouseToggle = (state:boolean) => { 
    return setHidden(state)    
  }

  return (
    <nav className="relative w-full h-[100px] flex justify-between items-center">
      <div className="flex f gap-3 items-center ">
        <img className="w-[10%]" src="/images/logo.png" alt="logo" loading="lazy"/>
        <p className="text-xl font-bold">DIELER AGENCY</p>
      </div>

      <div className="flex gap-2 items-center cursor-pointer" onMouseEnter={() => handleMouseToggle(true)}>
        <a href="#"  className="no-underline text-xl transition hover:opacity-70">
          SERVICIOS
        </a>
        <img onClick={() => handleMouseToggle(false)} src="/icons/arrow-down.svg" alt="Dropdown" className="w-8 transition hover:opacity-70" />
        { hidden && <HoverServices />}
      </div>

      <div>
        <a href="#" className="no-underline text-xl transition hover:opacity-70">
          BLOG
        </a>
      </div>

      <div>
        <a href="#" className="no-underline text-xl transition hover:opacity-70">
          ¿QUIENES SOMOS?
        </a>
      </div>
      <div className="border-white">
        <a href="#contact" className="text-xl no-underline bg-transparent py-1 px-5 border border-yellow-primary rounded-3xl text-yellow-primary font-bold transition hover:opacity-70">
          CONTACTANOS
        </a>
      </div>
    </nav>
  );
};

export { Nav };
