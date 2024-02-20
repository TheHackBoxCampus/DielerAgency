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
        <span className="text-3xl font-bold">{title}</span>
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
    <div className="w-full flex flex-col gap-5 h-[80vh] ">
      <h3 className="text-3xl w-2/4 text-center my-10 font-bold m-auto">
        ¿TIENES ALGUNA PREGUNTA? SI ES ASI PUEDES REVISAR LAS PREGUNTAS QUE HACE
        LA GENTE
      </h3>
      <Question title="¿Cuando empiezo a ver resultados?">
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia,
          totam?
        </span>
      </Question>
      <Question title="¿Por qué confiar en Dieler.Agency?">
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia,
          totam?
        </span>
      </Question>
      <Question title="¿Por qué necesito  una agencia para crecer?">
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia,
          totam?
        </span>
      </Question>
      <Question title="¿Qué es mejor entre un Grotwh Partner o un PartnerGreen? ">
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia,
          totam?
        </span>
      </Question>
    </div>
  );
};

export { FrequentQuestions };
