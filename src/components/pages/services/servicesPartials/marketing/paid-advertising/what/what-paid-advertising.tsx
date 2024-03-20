/**
 * *custom components
 */

import { Nav } from "../../../../../../custom/partials/Nav";

export const WhatPaidAdvertising = () => {
  return (
    <header className="h-auto mb-32 flex flex-col">
      <Nav />
      <section className="flex xs:flex-col xl:flex-row justify-between h-full items-center mt-10">
        <div className="flex flex-col gap-7 mt-16 xs:w-full xs:items-center xl:items-start w-[70%]">
          <h1 className="xs:text-[2.5em] sm:text-[3em] xs:text-center xl:text-start">
            <p>Publicidad pagada en</p>
            <span className="text-yellow-primary">Google Ads y Meta ads</span>
          </h1>
          <p className="mb-5 xs:text-xl md:text-2xl xs:text-center xl:w-[80%] 2xl:text-3xl xl:text-justify">
            En Dieler, entendemos que el éxito en el mundo digital requiere más
            que solo tener una presencia en línea. Se trata de destacar entre la
            multitud, llegar a tu audiencia objetivo y convertir esas conexiones
            en clientes fieles. Es aquí donde entran en juego nuestras
            estrategias de publicidad en Google Ads y Meta Ads.
          </p>
        </div>
        <img
          className="xs:mt-10 xl:m-0 xs:w-[70%] xl:w-[40%] 2xl:w-[60%] object-cover text-center"
          src="/images/google-meta-ads.png"
          alt="Demostraciones de webs corporativas"
          loading="lazy"
        />
      </section>
    </header>
  );
};
