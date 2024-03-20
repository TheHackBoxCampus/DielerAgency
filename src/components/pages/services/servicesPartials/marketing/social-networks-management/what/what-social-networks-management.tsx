/**
 * *custom components
 */

import { Nav } from "../../../../../../custom/partials/Nav";

export const WhatSocialNetworksManagement = () => {
  return (
    <header className="h-auto mb-32 flex flex-col">
      <Nav />
      <section className="flex xs:flex-col xl:flex-row justify-between h-full items-center mt-10">
        <div className="flex flex-col gap-7 mt-16 xs:w-full xs:items-center xl:items-start w-[70%]">
          <h1 className="xs:text-[2.5em] sm:text-[3em] md:text-[4em] xs:text-center xl:text-start">
            <p>Marketing en</p>
            <span className="text-yellow-primary">Redes sociales</span>
          </h1>
          <p className="mb-5 xs:text-xl md:text-2xl xs:text-center xl:w-[80%] 2xl:text-3xl xl:text-justify">
            En Dieler, comprendemos que el éxito en el mercado actual requiere
            más que simplemente tener una presencia en línea. Se trata de
            conectar con tu audiencia de manera significativa, construir
            relaciones sólidas y convertir seguidores en clientes leales. Es
            aquí donde entra en juego nuestro enfoque estratégico en el
            marketing en redes sociales.
          </p>
        </div>
        <img
          className="xs:mt-10 xl:m-0 xs:w-[70%] xl:w-[40%] 2xl:w-[60%] object-cover text-center"
          src="/images/social-network-management.png"
          alt="Demostraciones de webs corporativas"
          loading="lazy"
        />
      </section>
    </header>
  );
};
