/**
 * types
 */
import { RN } from "../../../types/FunctionalComponent.type";

/**
 * custom element
 */
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

const Footer = (): RN => {
  return (
    <footer className="absolute left-0 h-[400px] w-full bg-purple-oscure text-white flex gap-5 justify-evenly p-16">
      <div id="services">
        <span className="font-bold text-2xl">SERVICIOS</span>
        <div className="flex flex-col gap-2 mt-5">
          <a href="#" className="text-yellow-primary font-bold">
            Especialidad
          </a>
          <a href="#">Producción</a>
          <a href="#">Marketing</a>
          <a href="#">Desarrollo Web</a>
        </div>
      </div>

      <div id="Legaly">
        <span className="font-bold text-2xl">PAGINAS LEGALES</span>
        <div className="flex flex-col gap-2 mt-5">
          <a href="#">Politicas de privacidad</a>
          <a href="#">Politicas de cookies</a>
          <a href="#">Aviso Legal</a>
        </div>
      </div>

      <div id="compain">
        <span className="font-bold text-2xl">COMPAÑIA</span>
        <div className="flex flex-col gap-2 mt-5">
          <a href="#">Historias de origen</a>
          <a href="#">Sobre Nosotros</a>
          <a href="#">Realiza una cotización</a>
        </div>
      </div>

      <div id="contact">
        <span className="font-bold text-2xl">CONTACTO</span>
        <div className="flex flex-col gap-4 mt-5 ">
          <div className="flex gap-3">
            <img  className="w-[30px]" src="/icons/facebook.svg" alt="icon" loading="lazy"/>
            <img className="w-[30px]" src="/icons/whatsapp.svg" alt="icon" loading="lazy"/>
            <img className="w-[30px]" src="/icons/linkedin.svg" alt="icon" loading="lazy"/>
            <img className="w-[30px]" src="/icons/instagram.svg" alt="icon" loading="lazy"/>
          </div>
          <form className="flex flex-col gap-2"> 
            <label className="block font-bold text-xl text-yellow-primary">Mantente al tanto</label>
            <Input variant="convertion" type="text" placeholder="CORREO ELECTRONICO*" />
            <Button styles={{variant: "cta", heigth:"10px"}} text="¡ENVIA!" />
          </form>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
