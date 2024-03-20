/**
 *  components
 */

const HomePage = (): React.ReactNode => {
  return (
    <section className="xs:w-full mdx:w-[70%] flex flex-col gap-5 items-start animate__animated animate__fadeIn">
      <h1 className="xs:self-center xs:text-center mdx:text-start mdx:self-start 2xl:text-[5em] xs:text-[4em]">
        <p>
          SOMOS{" "}
          <span className="mdx:hidden text-yellow-primary font-bold">
            DIELER
          </span>
        </p>
        <p className="text-yellow-primary font-bold xs:hidden mdx:block">
          DIELER
        </p>
        <p className="text-yellow-primary font-bold">AGENCY</p>
      </h1>
      <p className="xs:text-xl md:text-2xl text-justify xs:w-full mdx:w-9/12">
        Nos destacamos por no ofrecer servicios, actuamos como tú PARTNER de
        confianza, utilizando el{" "}
        <span className="text-yellow-primary">MÉTODO DIELER</span> damos{" "}
        <span className="text-yellow-primary">SOLUCIONES</span> enfocadas y
        personalizadas para el creimiento de tu negocio.
      </p>
      <p className="xs:text-xl md: text-2xl md:text-justify xs:w-full lg:w-9/12 mt-3">
        <span className="text-yellow-primary">!RELLENA LOS DATOS¡</span> y deja
        de tener problemas de conversion
      </p>
    </section>
  );
};

export default HomePage;
