/**
 * * components
 */

import { Phase } from "../../../../../../custom/partials/phase";

export const HowWebCorporative = () => {
  return (
    <section className="flex flex-col gap-20 mb-32 items-center">
      <h3 className="xs:text-3xl md:text-4xl xs:w-full md:w-1/2 text-center">¿COMO LO HACEMOS?</h3>
      <div className="w-full grid xl:grid-cols-2 2xl:grid-cols-4 xs:gap-10 xl:gap-0">
        <Phase
          title="Te identificamos"
          description="Nuestro equipo se toma la tarea de entender tus necesidades y objetivos como marca para integrarlos con tus clientes potenciales y sus diferentes interacciones"
        />
        <Phase
          title="Planeación y planificacion"
          description="Este proceso es el mas importante, donde nuestro personal cualificado realiza la respectiva planificación, definiendo la arquitectura y todas las cosas necesarias para el funcionamiento de tu sitio web."
          important={true}
        />
        <Phase
          title="Desarrollamos tu sitio"
          description="De la mano de las mejores herramientas y el talento humano de nuestros desarrolladores, logramos  materializar  las necesidades de tus clientes en un sitio web funcional."
        />
        <Phase
          title="Funcionalidad de tu sitio"
          description="Dependiendo de los parametros de calidad, probamos tu sitio web, hasta que sea totalmente funcional, utilizando las mejores piezas graficas, estructuras y sobre todo garantizando mejores resultados en tu conversion."
        />
      </div>
    </section>
  );
};
