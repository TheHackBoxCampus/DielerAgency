/**
 * * components
 */

import { CardBenefit } from "../../../../../../custom/partials/CardBenefit";

export const WhyApplications = () => {
  return (
    <section className="flex flex-col items-center gap-20 mb-32">
      <h2 className="xs:text-3xl md:text-4xl xs:w-full w-1/2 text-center">
        ¿Por qué te puede ayudar una{" "}
        <span className="text-yellow-primary">aplicación web?</span>
      </h2>

      <div className="w-full grid xl:grid-cols-1 2xl:grid-cols-3 xs:gap-20 xl:gap-20">
        <CardBenefit
          iconPath="/images/folder.png"
          title="Consigue organización"
          description="¿Tienes algún departamento en la empresa que necesite una organización? si es así, el propósito de este tipo de aplicaciones es conseguir orden,  te brinda flexibilidad y facilidad a la hora de gestionar tus proyectos."
        />
        <CardBenefit
          iconPath="/images/cicle.png"
          title="Automatización de procesos"
          description="Para una organización o empresa es muy importante mantener algunos procesos que equivalen a tiempo automazados, por eso cuando se tiene una aplicación web con propósitos claros, puedes automatizar procesos y evitar dolores de cabeza."
        />
        <CardBenefit
          iconPath="/images/datas.png"
          title="Centralizas tus datos"
          description="¿Que haría Facebook sin usuarios?, si te diste cuenta los datos son lo mas esencial para una empresa, por eso la importancia de mantener tus datos centralizados, ya que reduce la duplicación de esfuerzos y facilita la toma de decisiones en tu empresa."
        />
      </div>
    </section>
  );
};
