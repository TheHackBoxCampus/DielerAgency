export const HowSocialNetworksManagement = () => {
  return (
    <section className="flex flex-col gap-10 mb-32 items-center">
      <h3 className="xs:text-3xl md:text-5xl text-center text-yellow-primary self-center">
        ¿TODO ESTO?
      </h3>
      <p className="xs:text-xl xl:text-2xl md:text-2xl xs:text-center xl:text-start" >
        El marketing de redes sociales integral abarca una amplia gama de
        actividades y estrategias diseñadas para promover una marca, producto o
        servicio a través de plataformas de redes sociales. Aquí hay un desglose
        de todo en lo que podemos ayudar del marketing de RRSS
      </p>

      <div className="flex gap-10 xs:flex-col xl:flex-row w-full justify-center mt-10 items-center">
        <ul className="flex flex-col xs:text-xl lg:text-3xl xs:items-center text-justify xl:items-start">
          <li className="list-disc">Estrategia de contenido</li>
          <li className="list-disc">Creación de contenidos</li>
          <li className="list-disc">Programación de publicaciones.</li>
          <li className="list-disc">interacción y compromiso</li>
          <li className="list-disc">publicidad en redes sociales</li>
          <li className="list-disc">Gestión de la reputación online</li>
          <li className="list-disc">Colaboraciones y asociaciones</li>
          <li className="list-disc">Análisis competitivo</li>
        </ul>
        <img className="xs:w-[80%] lg:w-[40%] text-center" src="/images/management.png" alt="pendiente" />
      </div>
    </section>
  );
};
