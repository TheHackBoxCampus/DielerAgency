/**
 * custom hook
 */
import { useAccordion } from "../hook/Acordeon-hook";

/**
 * types
 */

import { RN } from "../../../types/FunctionalComponent.type";

/**
 * interfaces
 */

import { Question } from "../../../interfaces/custom/question-interface";

const Question: React.FC<Question> = ({ title, children }) => {
  const { isOpen, toggleAccordion } = useAccordion();
  return (
    <div
      className="border border-yellow-primary p-5 cursor-pointer hover:text-yellow-primary transition duration-300"
      onClick={toggleAccordion}
    >
      <div className="flex justify-between">
        <span className="xs:text-xl sm:text-2xl md:text-3xl font-bold">
          {title}
        </span>
        {isOpen ? (
          <img src="/icons/arrow-right.svg" alt="icon" className="w-[30px]" />
        ) : (
          <img src="/icons/arrow-down.svg" alt="icon" className="w-[30px]" />
        )}
      </div>

      {isOpen && <div className="mt-5">{children}</div>}
    </div>
  );
};

const FrequentQuestions = (): RN => {
  return (
    <div className="w-full flex flex-col gap-5 my-20">
      <h3 className="xs:w-full xs:text-2xl sm:text-3xl lg:w-2/4 text-center my-10 font-bold m-auto">
        ¿TIENES ALGUNA PREGUNTA? SI ES ASI PUEDES REVISAR LAS PREGUNTAS QUE HACE
        LA GENTE
      </h3>
      <Question title="¿Cuando empiezo a ver resultados?">
        <span>
          Depende de cual sea la estrategia que usemos en tu caso, no es lo
          mismo una estrategia integral estructurada a corto, mediano y largo
          plazo, a una estrategia de SEO o de contenidos para redes sociales que
          suelen verse resultados más rápidos.
        </span>
      </Question>
      <Question title="¿Por qué confiar en Dieler.Agency?">
        <span>
          Contamos las herramientas profesionales y con un equipo de expertos
          íntegros que se sigue desarrollando día a día, pero lo más importante
          es nuestro enfoque en los resultados y te brindamos garantías por
          contrato (dependiendo de tú caso)
        </span>
      </Question>
      <Question title="¿Por qué necesito una agencia para crecer?">
        <span>
          Si bien una agencia no es la prioridad más importante de tu negocio,
          puede ser un excelente aliado en la mayoría de los casos para
          permitirte a ti como dueño de negocio tener; más libertad, mayores
          resultados y un constante desarrollo.
        </span>
      </Question>
      <Question title="¿Cuál es la diferencia entre Dieler Partner y el Método Dieler?">
        <span>
          En nuestro método desarrollamos una visión general y a largo plazo,
          nos entregamos por completo 1 a 1 al crecimiento de tu negocio
          desarrollando los 7 pilares de los que se compone el método,
          asegurándote un sistema que le permita a tu negocio crecer en el
          tiempo, abarcando un aspecto general de la empresa y principalmente la
          facturación, procesos, recursos y equipo, mientras que nuestro Dieler
          Partner es un socio, enfocado netamente a la conversión de tu negocio,
          desarrollando una visión especifica a corto y mediano plazo de las
          cosas más importantes para aumentar las ventas.
        </span>
      </Question>
    </div>
  );
};

export { FrequentQuestions };
