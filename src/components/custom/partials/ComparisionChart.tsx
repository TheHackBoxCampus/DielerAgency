/**
 * types
 */

import { RN } from "../../../types/FunctionalComponent.type";

/**
 * interfaces
 */
import { CardComparision } from "../../../interfaces/custom/cards-comparision-interface";

const CardsComparision: React.FC<CardComparision> = ({
  title,
  comparision,
  type,
}) => {
  return (
    <div className="bg-white text-black flex flex-col w-[500px] h-auto p-10 gap-5 rounded-xl">
      <span className="text-3xl text-center w-[70%] self-center font-bold">
        {title}
      </span>
      <div className="flex flex-col gap-2">
        {comparision &&
          comparision.map((comparision, index) => (
            <span className="text-2xl flex gap-2 items-center" key={index}>
              {type == "success" ? (
                <img src="/icons/check.svg" alt="icon" className="w-[30px]" />
              ) : (
                <img src="/icons/cancel.svg" alt="icon" className="w-[30px]" />
              )}
              <p>{comparision}</p>
            </span>
          ))}
      </div>
    </div>
  );
};

const ComparisionChart = (): RN => {
  return (
    <section className="my-20 h-[70vh] flex flex-col gap-5 justify-center items-center">
      <h3 className="text-4xl text-center w-1/2">
        EL SECRETO DE TENER UN BUEN{" "}
        <span className="text-yellow-primary font-bold">
          SOCIO DE CRECIMIENTO
        </span>
      </h3>
      <p className="w-1/3 text-center cursive text-2xl">
        La diferencia entre negocios que convierten y aquellos que se quedan
        estancados
      </p>
      <div className="flex gap-10 mt-10">
        <CardsComparision
          title="AGENCIAS TRADICIONALES"
          type="bad"
          comparision={[
            "Enfoque generico",
            "Proceso complejo",
            "Sin garantia de exito",
          ]}
        />
        <CardsComparision
          title="CON UN SOCIO DE CRECIMIENTO"
          type="success"
          comparision={[
            "Estrategia personalizada",
            "Trabajo simplificado",
            "Garantias con resultados",
          ]}
        />
      </div>
    </section>
  );
};

export { ComparisionChart };
