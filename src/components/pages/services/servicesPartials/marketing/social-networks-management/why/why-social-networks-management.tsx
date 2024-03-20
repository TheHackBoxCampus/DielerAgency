/**
 * * components
 */

export const WhySocialNetworkManagement = () => {
  return (
    <section className="flex flex-col gap-10 mb-32">
      <h2 className="xs:text-3xl md:text-4xl text-center self-center ">
        <span className="text-yellow-primary">
          ¿QUÉ ES Y PORQUE ES IMPORTANTE?
        </span>
      </h2>
      <h3 className="text-yellow-primary text-3xl xs:text-center md:text-start">
        Marketing en redes sociales
      </h3>

      <div className="flex flex-col gap-3 text-xl text-justify">
        <p>
          El marketing en redes sociales es una pieza fundamental en el
          rompecabezas del éxito empresarial por varias razones:
        </p>
        <ul className="flex flex-col gap-3">
          <li className="list-disc ml-10">
            Aumenta la visibilidad de tu marca y genera conciencia entre tu
            audiencia objetivo.
          </li>
          <li className="list-disc ml-10">
            Fomenta la participación y la lealtad de la comunidad, convirtiendo
            seguidores en clientes y defensores de la marca.
          </li>
          <li className="list-disc ml-10">
            Impulsa el tráfico a tu sitio web y aumenta las conversiones,
            contribuyendo directamente al crecimiento y la rentabilidad de tu
            negocio.
          </li>
        </ul>
        <p>
          En Dieler, estamos comprometidos a ayudarte a aprovechar al máximo el
          potencial del marketing en redes sociales. Desde la estrategia hasta
          la ejecución y el análisis, trabajamos contigo para crear campañas
          efectivas que impulsen tu negocio hacia el éxito en línea.
        </p>
      </div>
    </section>
  );
};
