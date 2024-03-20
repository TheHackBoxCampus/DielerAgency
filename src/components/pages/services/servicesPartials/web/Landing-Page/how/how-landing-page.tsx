/**
 * * components
 */

import { Phase } from "../../../../../../custom/partials/phase";

export const HowLandingPage = () => {
  return (
    <section className="flex flex-col gap-20 mb-32 items-center">
      <h3 className="xs:text-3xl md:text-4xl xs:w-full md:w-1/2 text-center">¿COMO LO HACEMOS?</h3>
      <div className="w-full grid xl:grid-cols-2 2xl:grid-cols-4 xs:gap-10 2xl:gap-0">
        <Phase
          title="Etapa de identificación"
          description="Es importante para nosotros saber que tipo de landing page se ajusta a tus necesidades y con que proposito se va a realizar, esto se hace con el objetivo de encontrar los mejores recursos para tu empresa o negocio "
        />
        <Phase
          title="Planeación y planificacion"
          description="Esta fase es la mas importante, de aqui depende que tu landing page convierta,  nos encargamos de crear una estructura para ti, la parte del embudo, que proceso va a seguir el cliente cuando entre, todo orientado a la conversion"
          important={true}
        />
        <Phase
          title="la desarrollamos"
          description="Con las habilidades de nuestros desarrolladores y con ayuda de las herramientas mas avanzadas, construiremos tu landing page, cumpliendo todo el proceso necesario para sacarla a producción."
        />
        <Phase
          title="La ponemos en Acción"
          description="Nosotros realizamos los monitoreos necesarios post-lanzamiento, para ver los resultados de las implementaciones, en esta etapa puede haber modificaciones, para el mejoramiento de los resultados."
        />
      </div>
    </section>
  );
};
