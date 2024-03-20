import { Nav } from "../../../../../../custom/partials/Nav";

/**
 *
 * custom components
 */

import { Button } from "../../../../../../custom/ui/Button";

export const WhatWebCorporative = () => {
  return (
    <header className="h-auto mb-32 flex flex-col">
      <Nav />
      <section className="flex xs:flex-col xl:flex-row justify-between h-full items-center mt-3">
        <div className="flex flex-col gap-7 mt-16 xs:w-full xs:items-center xl:items-start xl: 2xl:w-1/2">
          <h1 className="xs:text-[3em] sm:text-[4em] 2xl:text-[5em]">
            <p >Pagina Web </p>
            <span className="text-yellow-primary ">Corporativa</span>
          </h1>
          <p className="mb-5 xs:text-xl md:text-2xl xs:text-center xl:text-start 2xl:text-3xl 2xl:w-[80%]">
            En Dieler Agency nos enfocamos en hace que tu{" "}
            <span className="text-yellow-primary">pagina web</span> sea una
            herramienta poderosa de ventas.
          </p>
          <Button
            styles={{
              variant: "cta",
              width: "w-[350px]",
              fontSize: "text-2xl",
            }}
            text="¡Obten la tuya!"
           />
        </div>
        <img
          className="xs:mt-10 xl:m-0 xs:w-full xl:w-[50%] 2xl:w-[60%] object-cover text-center"
          src="/images/web-corporativa.png"
          alt="Demostraciones de webs corporativas"
          loading="lazy"
        />
      </section>
    </header>
  );
};
