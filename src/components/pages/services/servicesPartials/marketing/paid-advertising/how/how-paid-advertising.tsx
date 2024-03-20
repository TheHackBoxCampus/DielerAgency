/**
 * * components
 */

import { Phase } from "../../../../../../custom/partials/phase";

export const HowPaidAdvertising = () => {
  return (
    <section className="flex flex-col gap-10 mb-32 items-center">
      <h3 className="xs:text-3xl md:text-4xl xs:w-full md:w-1/2 text-center text-yellow-primary">¿COMO LO HACEMOS?</h3>
      <p className="text-xl text-center xs:w-full md:w-9/12">
        Nos destacamos porqué nuestro enfoque principal es dar resultados, y
        para ello trabajamos con base en estos cuatro (4) pilares para
        garantizar el éxito de tu campaña.
      </p>
      <div className="w-full grid xl:grid-cols-2 2xl:grid-cols-4 xs:gap-10 2xl:gap-0">
        <Phase
          title="Estrategia"
          description="Esta es la fase que da inicio al proceso, aquí desarrollamos las estrategias completas y mas viables que nos permitan pasar del punto actual, al objetivo deseado"
        />
        <Phase
          title="Planeación"
          description="Luego de tener clara la ruta estratégica, pasamos al plan de acción, planear estratégicamente la ejecución nos permite llegar al objetivo de una manera más facil y controlada "
        />
        <Phase
          title="Optimización"
          description="En esta fase realizamos el análisis correspondiente para medir aquello que nos esta dando resultado y lo que no, posterior optimizar en la medida posible los procesos"
        />
        <Phase
          title="Escalabilidad"
          description="Llegamos a la parte más importante, y es seguir manteniendo los buenos resultados de una manera predecible y sobre todo sostenible a lo largo del tiempo, teniendo un margen de mejora continua "
        />
      </div>
    </section>
  );
};
