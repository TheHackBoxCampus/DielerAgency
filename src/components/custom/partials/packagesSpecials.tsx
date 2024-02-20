/**
 * types
 */
import { RN } from "../../../types/FunctionalComponent.type";

/**
 * interfaces
 */

import { PackageSpecial } from "../../../interfaces/custom/package-special";

/**
 * custom elements
 */
import { Button } from "../ui/Button";

const Package: React.FC<PackageSpecial> = ({
  title,
  description,
  btnText,
}): RN => {
  return (
    <>
      <div className="w-[400px] h-[350px] m-auto bg-white text-black p-5 flex flex-col gap-3 justify-between">
        <span className="text-3xl text-center font-bold">{title} </span>
        <p className="text-justify">{description}</p>
        <Button styles={{ variant: "cta" }} text={btnText} />
      </div>
    </>
  );
};

const PackageSpecials = (): RN => {
  return (
    <section className="h-[80vh]">
      <div className="absolute w-full h-[80vh] m-0 left-0 bg-purple-modal p-10">
        <div className="flex flex-col gap-5">
          <h3 className="text-center text-4xl w-1/2 m-auto font-bold mb-5">
            NO SOLO HACEMOS ESO, TE BRINDAMOS LO NECESARIO PARA QUE TU NEGOCIO
            SEA UN ÉXITO
          </h3>

          <p className="text-center text-3xl mb-5 cursive">
            Nuestra especialidad{" "}
          </p>
          {/* packages */}
          <div className="w-[70%] m-auto flex gap-7">
            <Package
              title="Creación de cursos "
              description="Contamos con el conocimiento y las herramientas necesarias para no solo ayudarte con la producción, también con la estrategia detrás y la comercialización de tu curso online, y que así puedas monetizar tu conocimiento."
              btnText="¡HACER COTIZACION!"
            />
            <Package
              title="Growth partner"
              description="Imagina un socio que se encargue del crecimiento de tu negocio, nos pagas un porcentaje sobre las ventas, nos encargamos de todo el proceso, estrategia, planeación, ejecución y todo lo necesario para hacer que tu negocio venda más."
              btnText="¡IR AL FORMULARIO!"
            />
            <Package
              title="PartnerGreen"
              description="Nuestro servicio más completo, donde te podemos brindar los mejores resultados, nos entregamos por completo a desarrollar un ecosistema basado en sistemas para tu negocio enfocados en la conversión, crecimiento medido, planeación y gestión integra."
              btnText="¡MAS INFORMACIÓN!"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { PackageSpecials };
