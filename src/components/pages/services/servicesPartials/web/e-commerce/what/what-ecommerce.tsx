import { Nav } from "../../../../../../custom/partials/Nav";

/**
 *
 * custom components
 */

import { Button } from "../../../../../../custom/ui/Button";

export const WhatEcommerce = () => {
  return (
    <header className="h-auto mb-32 flex flex-col">
      <Nav />
      <section className="flex xs:flex-col xl:flex-row justify-between h-full items-center mt-3">
        <div className="flex flex-col gap-7 mt-16 xs:w-full xs:items-center xl:items-start xl: 2xl:w-1/2">
          <h1 className="xs:text-[3em] sm:text-[4em] 2xl:text-[5em] xs:text-center xl:text-start">
            <p>Comercio</p>
            <span className="text-yellow-primary">Electronico</span>
          </h1>
          <p className="mb-5 xs:w-full xs:text-xl md:text-2xl xs:text-center xl:text-start 2xl:text-3xl xl:w-[80%] 2xl:w-[80%]">
            Empieza a vender de forma sencilla con un{" "}
            <span className="text-yellow-primary">E-commerce</span> y logra un
            mayor alcance para tu negocio con nosotros.
          </p>
          <Button
            styles={{
              variant: "cta",
              width: "xs:w-[300px] sm:w-[450px]",
              fontSize: "xs:text-xl sm:text-2xl",
            }}
            text="Consulta por un Ecommerce"
          />
        </div>
        <img
          className="xs:mt-10 xl:m-0 xs:w-full xl:w-[50%] 2xl:w-[60%] object-cover text-center"
          src="/images/ecommerce.png"
          alt="Demostraciones de webs corporativas"
          loading="lazy"
        />
      </section>
    </header>
  );
};
