/**
 * types
 */
import { RN } from "../../../types/FunctionalComponent.type";

const Benefits = (): RN => {
  return (
    <div className="w-full h-28 h- text-black bg-white flex justify-around items-center mt-5 rounded-xl">
      <div className="flex flex-col gap-2 items-center">
        <img className="w-[50px]" src="/icons/bar-growth.svg" alt="icon" />
        <span>ELEVA CONVERSIONES</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <img className="w-[50px]" src="/icons/visibility.svg" alt="icon" />
        <span>AUMENTA VISIBILIDAD</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <img className="w-[50px]" src="/icons/hourglass.svg" alt="icon" />
        <span>OPTIMIZA PROCESOS</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <img className="w-[50px]" src="/icons/plant.svg" alt="icon" />
        <span>IMPULSA CRECIMIENTO</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <img className="w-[50px]" src="/icons/win.svg" alt="icon" />
        <span>MEJORA RESULTADOS</span>
      </div>
    </div>
  );
};

const Guarantee = (): RN => {
  return (
    <div id="benefits" className="w-full flex justify-between gap-2">
      <div className="flex gap-3 items-center">
        <img src="/icons/check.svg" alt="icon" />
        <span className="text-lg">¡NO TE PREOCUPES POR TU NICHO!</span>
      </div>
      <div className="flex gap-3 items-center">
        <img src="/icons/check.svg" alt="icon" />
        <span className="text-lg">AESORIAS PERSONALIZADAS</span>
      </div>
      <div className="flex gap-3 items-center">
        <img src="/icons/check.svg" alt="icon" />
        <span className="text-lg">TE DAMOS RESULTADOS</span>
      </div>
    </div>
  );
};

const TextThatConverts = (): RN => {
  return (
    <div className="mt-5 bg-yellow-primary text-center p-2 rounded-tr-xl rounded-tl-xl flex gap-1 justify-center">
      <img src="/icons/play-video.svg" alt="icon" />
      <span className="text-black font-bold">
        DESCURBRE MAS EN EL VIDEO A CONTINUACIÓN E INICIA GRATIS CON NOSOTROS
      </span>
    </div>
  );
};

const VideoMain = () => {
  return (
    <div className="w-full h-[623px] flex justify-center items-center bg-gray-400 rounded-bl-xl rounded-br-xl">
      <span className="text-gray-800 text-3xl">VIDEO</span>
    </div>
  );
};

const SalesVideo = (): RN => {
  return (
    <section className="w-[90%] m-auto h-[100vh] flex flex-col justify-center">
      <Guarantee />
      <div className="relative">
        <TextThatConverts />
        <VideoMain />
      </div>
      <Benefits />
    </section>
  );
};

export { SalesVideo };
