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
  main
}): RN => {
  return (
    <>
      <div className={`xs:w-[350px] smw-[400px] h-auto ${main ? "bg-yellow-100 sm:scale-110" : "bg-white"} text-black p-5 flex flex-col gap-3 justify-between`}>
        <span className="text-3xl text-center font-bold">{title} </span>
        <p className="text-justify">{description}</p>
        <Button styles={{ variant: "cta" }} text={btnText} />
      </div>
    </>
  );
};

const PackageSpecials = (): RN => {
  return (
      <section className="w-full mb-20">
        <div className="flex flex-col gap-5 m-10 items-center">
          <h3 className="text-center xs:text-2xl sm:text-3xl font-bold mb-5">
            NO SOLO HACEMOS ESO, TE BRINDAMOS LO NECESARIO PARA QUE TU NEGOCIO
            SEA UN ÉXITO
          </h3>

          <p className="text-center text-3xl mb-5 cursive">
            Nuestra especialidad{" "}
          </p>
          {/* packages */}
          <div className="flex xs:flex-col xl:flex-row gap-7">
            <Package
              title="Creación de cursos "
              description="Contamos con el conocimiento y las herramientas necesarias para no solo ayudarte con la producción, también con la estrategia detrás y la comercialización de tu curso online, y que así puedas monetizar tu conocimiento."
              btnText="¡HACER COTIZACION!"
            />
            <Package
              title="Metodo Dieler"
              description="Nuestro servicio más completo, donde te podemos brindar los mejores resultados, nos entregamos por completo a desarrollar un ecosistema basado en sistemas para tu negocio enfocados en la conversión, crecimiento medido, planeación y gestión integra."
              btnText="¡MAS INFORMACIÓN!"
              main={true}
            />
            <Package
              title="DielerPartner"
              description="Imagina un socio que se encargue del crecimiento de tu negocio, nos pagas un porcentaje sobre las ventas, nos encargamos de todo el proceso, estrategia, planeación, ejecución y todo lo necesario para hacer que tu negocio venda más."
              btnText="¡IR AL FORMULARIO!"
            />
          </div>
        </div>
      </section>
  );
};

export { PackageSpecials };
