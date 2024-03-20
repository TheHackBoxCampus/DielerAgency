/**
 * *custom components
 */

import { Nav } from "../../../../../../custom/partials/Nav";

export const WhatContentMarketing = () => {
  return (
    <header className="h-auto mb-32 flex flex-col">
      <Nav />
      <section className="flex xs:flex-col xl:flex-row justify-between h-full items-center mt-10">
        <div className="flex flex-col gap-7 mt-16 xs:w-full xs:items-center xl:items-start w-[70%]">
          <h1 className="xs:text-[3em] sm:text-[4em] 2xl:text-[5em] xs:text-center xl:text-start">
            <p>Marketing de</p>
            <span className="text-yellow-primary">contenidos</span>
          </h1>
          <p className="mb-5 xs:text-xl md:text-2xl xs:text-center xl:text-start 2xl:text-3xl xl:w-[80%] lg:text-justify">
            Es la clave para cautivar a tu audiencia, construir relaciones
            sólidas y convertir visitantes en clientes leales.
          </p>
          <p className="mb-5 xs:text-xl md:text-2xl xs:text-center xl:text-start xl:w-[80%] 2xl:text-3xl text-justify">
            En Dieler, entendemos que el contenido es el motor que impulsa el
            éxito en el mundo digital. Permítenos llevarte al siguiente nivel
            con nuestra experiencia en marketing de contenidos.
          </p>
        </div>
        <img
          className="xs:mt-10 xl:m-0 xs:w-full xl:w-[40%] 2xl:w-[60%] object-cover text-center"
          src="/images/contents-marketing.png"
          alt="Demostraciones de webs corporativas"
          loading="lazy"
        />
      </section>
    </header>
  );
};
