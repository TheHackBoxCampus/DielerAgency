import { Nav } from "../../../../../../custom/partials/Nav";

/**
 *
 * custom components
 */

import { Button } from "../../../../../../custom/ui/Button";

export const WhatAplications = () => {
  return (
    <header className="h-auto mb-32 flex flex-col">
      <Nav />
      <section className="flex xs:flex-col xl:flex-row justify-between h-full items-center mt-3">
        <div className="flex flex-col gap-7 mt-16 xs:w-full xs:items-center xl:items-start xl: 2xl:w-1/2">
          <h1 className="xs:text-[2.5em] sm:text-[3em] md:text-[4em] 2xl:text-[5em]">
            <p>Aplicaciones <span className="text-yellow-primary">Web</span></p>
          </h1>
          <p className="mb-5 xs:text-xl md:text-2xl xs:text-center xl:text-start 2xl:text-3xl 2xl:w-[80%]">
            Gracias al talento humano de nuestro equipo, podemos realizar{" "}
            <span className="text-yellow-primary">aplicaciones web</span> que
            mejoren la eficiencia de tu empresa.
          </p>
          <Button
            styles={{
              variant: "cta",
              width: "w-[350px]",
              fontSize: "text-2xl",
            }}
            text="¡Construye la tuya!"
          />
        </div>
        <img
          className="xs:mt-10 xl:m-0 xs:w-full xl:w-[50%] 2xl:w-[60%] object-cover text-center"
          src="/images/aplicaciones-web.png"
          alt="Demostraciones de webs corporativas"
          loading="lazy"
        />
      </section>
    </header>
  );
};
