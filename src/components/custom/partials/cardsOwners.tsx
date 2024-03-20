/**
 * types
 */
import { RN } from "../../../types/FunctionalComponent.type";

/**
 * custom components
 */

import { Button } from "../ui/Button";
import { SliderComponent } from "../ui/Slider";
/**
 * interfaces
 */

/**
 * hook
 */
import { sliderIndex } from "../hook/slider-hook";

import { CardOwner } from "../../../interfaces/custom/cards-owner-interfaces";

const Card: React.FC<CardOwner> = ({
  name,
  description,
  subHeadline,
  benefits,
  image,
  btnText,
}): RN => {
  return (
    <div
      className="bg-purple-modal border border-yellow-primary flex gap-3 justify-between items-center m-auto mb-20 xs:h-[700px] xs:flex-col xs:w-[89%] xl:h-[450px] xl:flex-row p-3"
      id="card_owner"
    >
      <div className="w-1/2 flex flex-col relative h-full justify-end items-center mb-5 z-10">
        <img
          className="absolute bottom-0 text-center w-[100%] h-[90%] object-contain"
          src={image}
          alt="people"
          loading="lazy"
        />
        <Button styles={{ variant: "cta" }} text={btnText} />
      </div>
      <div className="flex flex-col gap-5 w-[70%] xs:items-center xl:items-start">
        <h3 className="xs:w-full xl:w-4/5 xs:text-xl xl:text-3xl">{name}</h3>
        <p className="xs:w-full xl:w-4/5 text-md text-justify">
          {description.text}{" "}
          <span className="text-yellow-primary">{description.question}</span>
        </p>
        <p className="xs:w-full xl:w-4/5 text-md">
          {subHeadline.start}{" "}
          <span className="text-yellow-primary">{subHeadline.service}</span>{" "}
          {subHeadline.end}
        </p>
        {/* line */}
        <hr className="xs:w-full xl:w-1/2 " />
        {/* benefits */}
        <div className="flex flex-col gap-3 text-sm xs:w-full xl:w-4/5">
          {benefits.map((benefit, index) => (
            <span key={index}>- {benefit}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const CardsOwners = (): RN => {
  const { hook, index } = sliderIndex();
  const slides = [
    <Card
      name="JUAN DIEGO RIAÑO M."
      description={{
        text: "Un negocio que no tiene un sistema que le permita crecer de manera integra, es un negocio condenado a desaparecer",
        question: "¿Quieres saber cómo puedes evitarlo",
      }}
      subHeadline={{
        start: "Con un",
        service: "Sistema Evergreen",
        end: "enfocado en resultados puedes:",
      }}
      benefits={[
        "Escalar tu negocio con mayor facilidad",
        "Poder establecer una estrategia y un plan de acción clara",
        "Automatizar y delegar procesos",
      ]}
      btnText="ENTRENAMIENTO GRATIS"
      image="/images/peoples/Diego.png"
    />,
    <Card
      name="CHARLIE DANIEL AMAYA R."
      description={{
        text: "En esta era digital lo más importante y vital en un negocio, es el proceso de ventas desde inicio a fin",
        question: "¿Quieres saber cómo hacer sistema de ventas ganador?",
      }}
      subHeadline={{
        start: "Con un",
        service: "Sistema de ventas completo",
        end: "es mas fácil lograr:",
      }}
      benefits={[
        "atraer prospectos calificados estratégicamente.",
        "Cierre de venta efectivo de HIGH TICKET",
        "Crea tu marca personal impulsa tu producto y/o servicio",
      ]}
      btnText="ENTRENAMIENTO GRATIS"
      image="/images/peoples/Daniel.png"
    />,
    <Card
      name="MILLER KALED NARIÑO M."
      description={{
        text: "Cuando tienes un producto digital o fisico buscas la forma de llegar a mas gente para que lo puedan comprar.",
        question: "¿Quieres saber cómo puedes hacerlo?",
      }}
      subHeadline={{
        start: "Con un",
        service: "Sistema de Conversion",
        end: "puedes:",
      }}
      benefits={[
        "Vender tu producto con mayor facilidad",
        "Ganar miles de clientes",
        "Escalabilidad y libertad",
      ]}
      btnText="ACESORIA GRATIS"
      image="/images/peoples/Miller.png"
    />,
  ];
  return (
    <section className="">
      <h3 className="text-center xs:text-2xl md:text-3xl md:w-1/2 m-auto font-bold mb-5">
        TE DAMOS LA LO QUE NECESTAS PARA MEJORAR TUS VENTAS
      </h3>
      <p className="text-center xs:text-xl md:text-2xl mb-5 cursive">
        Experto en estrategia y sistematización{" "}
      </p>

      <SliderComponent slides={slides} hook={hook} />
    </section>
  );
};

export { CardsOwners };
