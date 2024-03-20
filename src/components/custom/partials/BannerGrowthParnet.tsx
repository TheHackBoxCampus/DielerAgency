const BannerGrowthPartner = () => {
  return (
    <section className="w-full xs:h-[900px] mdx:h-[600px] ">
      <div className="absolute xs:h-[900px] mdx:h-[600px] m-0 left-0 bg-purple-modal">
        <div className="flex w-full xs:flex-col mdx:flex-row h-full justify-center items-center gap-10">
          <div
            id="banner_Growth_partner_info"
            className="xs:w-[85%] sm:w-[70%] mdx:w-1/3 flex flex-col gap-5"
          >
            <h3 className="xs:text-center lg:text-start xs:text-2xl md:text-4xl">
              Entonces ¿Qué es el{" "}
              <span className="text-yellow-primary font-bold">
                MÉTODO DIELER
              </span>
              ?
            </h3>
            <p className="xs:text-justify mdx:text-start">
              Imagina tu empresa como un equipo de fútbol sin un Director
              técnico que se encargue del equipo. Sin una estrategia clara,
              estás limitado a los mismos movimientos y estrategias, sin nuevas
              tácticas para ganar el partido.
            </p>
            <span className="text-yellow-primary">AQUI ENTRAMOS NOSOTROS</span>
            <p className="xs:text-justify mdx:text-start">
              Somos la parte técnica que refuerza tu equipo. Traemos nuevas
              ideas, habilidades y recursos que ayudan a tu empresa a marcar
              goles y a superar los desafíos del juego empresarial y lo mejor,
              que todo esto lo creamos en forma de sistema para que te perdure
              en el tiempo y los resultados sean consistentes en el largo plazo,
              el equipo que domina el juego.
            </p>
          </div>
          <div
            id="banner_Growth_partner_ilustration"
            className="flex justify-center"
          >
            <img
              src="/images/growth_partner_ilustration.png"
              alt="ilustration"
              className="xs:w-4/5 lg:w-10/12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { BannerGrowthPartner };
