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
      className="bg-purple-modal border border-yellow-primary h-[400px] flex gap-3 justify-between items-center m-auto mb-20 w-[90%]"
      id="card_owner"
    >
      <div className="w-1/2 flex flex-col relative h-full justify-end items-center mb-5">
        <img
          className="absolute bottom-0 text-center w-9/12"
          src={image}
          alt="people"
          loading="lazy"
        />
        <Button styles={{ variant: "cta" }} text={btnText} />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-3xl">{name}</h3>
        <p className="w-4/5 text-md text-justify">
          {description.text}{" "}
          <span className="text-yellow-primary">{description.question}</span>
        </p>
        <p className="">
          {subHeadline.start}{" "}
          <span className="text-yellow-primary">{subHeadline.service}</span>{" "}
          {subHeadline.end}
        </p>
        {/* line */}
        <hr className="w-1/2" />
        {/* benefits */}
        <div className="flex flex-col gap-3">
          {benefits.map((benefit, index) => (
            <span key={index}>- {benefit}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const CardsOwners = (): RN => {
  const slides = [
    <Card
      name="JUAN DIEGO RIAÑO M."
      description={{
        text: "Un negocio que no tiene un sistema que le permita crecer de manera integra, es un negocio condenado a desaparecer",
        question: "¿Quieres saber cómo puedes evitarlo",
      }}
      subHeadline={{
        start: "Con un Sistema",
        service: "Integro enfocado",
        end: "en resultados puedes:",
      }}
      benefits={[
        "Escalar tu negocio con mayor facilidad",
        "Poder establecer una ruta de acción clara",
        "Automatizar y delegar procesos",
      ]}
      btnText="ASESORIA GRATIS"
      image="/images/peoples/Diego.png"
    />,
    <Card
      name="CHARLIE DANIEL AMAYA R."
      description={{
        text: "A día de hoy lo mas importante para tus ventas son los anuncios, la atención y retención que seas capaz de obtener.",
        question: "¿Quieres saber cómo hacer creativos ganadores?",
      }}
      subHeadline={{
        start: "Con una",
        service: "Producción creativa",
        end: "es mas fácil lograr:",
      }}
      benefits={[
        "Llegar y convertir a un publico con mayor facilidad.",
        "Obtener clientes de manera orgánica sin invertir de más",
        "Crear una comunidad consolidada que perdure en el tiempo",
      ]}
      btnText="MENTORIA GRATIS"
      image="/images/peoples/Daniel.png"
    />,
    <Card
      name="MILLER KALED NARIÑO M."
      description={{
        text: "Cuando tienes un producto digital o fisico buscas la forma de llegar a mas gente para que lo puedan comprar.",
        question: "¿Quieres saber cómo puedes hacerlo?",
      }}
      subHeadline={{
        start: "Con una",
        service: "landing page",
        end: "ganadora puedes:",
      }}
      benefits={[
        "Vender tu producto con mayor facilidad",
        "Ganar miles de clientes",
        "Escalabilidad y libertad",
      ]}
      btnText="SESION GRATUITA"
      image="/images/peoples/Miller.png"
    />,
  ];

  return (
    <section>
      <h3 className="text-center text-4xl w-1/2 m-auto font-bold mb-5">
        TE DAMOS LA LO QUE NECESTAS PARA MEJORAR TUS VENTAS
      </h3>
      <p className="text-center text-2xl mb-5 cursive">
        Experto en estrategia y sistematización{" "}
      </p>

      <SliderComponent slides={slides} />
    </section>
  );
};

export { CardsOwners };
