export const WhyContentMarketing = () => {
  return (
    <section className="flex flex-col w-full gap-5 mb-32">
      <h2 className="xs:text-2xl md:text-3xl lg:text-4xl xs:w-full md:w-1/2 text-center self-center">
        <span className="text-yellow-primary">
          ¿QUÉ ES Y PORQUE ES IMPORTANTE?
        </span>
      </h2>
      <h3 className="text-yellow-primary text-2xl mt-10 xs:text-center md:text-start">
        Marketing de contenidos
      </h3>
      <p className="text-xl xs:text-justify md:text-start">
        El marketing de contenidos es una estrategia de marketing que se centra
        en la creación y distribución de contenido valioso, relevante y
        atractivo para atraer, comprometer y retener a una audiencia específica.
        Desde artículos de blog y videos hasta infografías y guías, el marketing
        de contenidos abarca una amplia gama de formatos y canales para llegar a
        tu audiencia de manera efectiva.
      </p>
      <div className="flex flex-col mt-20">
        <div className="flex xs:flex-col xl:flex-row xs:gap-10 xl:justify-between">
          <div className="flex flex-col gap-5 items-center">
            <div className="flex gap-2 text-center w-[50%] justify-center">
              <img src="/icons/check.svg" alt="" loading="lazy" />
              <span className="text-yellow-primary text-2xl">Buen uso</span>
            </div>
            <img className="xs:w-full sm:w-[90%] lg:w-[60%]" src="/images/buen-uso.jpg" alt="falso" />
          </div>

          <div className="flex flex-col gap-5 items-center">
            <div className="flex gap-2 text-center w-[50%] justify-center">
              <img src="/icons/cancel.svg" alt="" loading="lazy" />
              <span className="text-yellow-primary text-3xl">Mal uso</span>
            </div>
            <img className="xs:w-full sm:w-[90%] lg:w-[60%]" src="/images/mal-uso.jpg" alt="falso" />
          </div>
        </div>
      </div>
    </section>
  );
};
