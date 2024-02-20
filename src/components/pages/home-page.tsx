/**
 *  components
 */


const HomePage = (): React.ReactNode => {
  return (
    <section className="w-full flex flex-col gap-5 animate__animated animate__fadeIn">
      <h1 className="text-[5em]">
        <p>SOMOS</p>
        <p className="text-yellow-primary font-bold">DIELER</p>
        <p className="text-yellow-primary font-bold">AGENCY</p>
      </h1>
      <p className="text-3xl text-justify w-9/12">
        Nos destacamos por no ofrecer servicios, actuamos como tu growth partner
        de confianza, damos{" "}
        <span className="text-yellow-primary font-bold">SOLUCIONES</span>{" "}
        enfocadas y personalizadas para tu negocio.
      </p>
      <p className="text-3xl text-justify w-9/12 mt-3">
        <span className="text-yellow-primary">!RELLENA LOS DATOS¡</span> y sube
        tus ventas con nosotros.
      </p>
    </section>
  );
};

export default HomePage;
