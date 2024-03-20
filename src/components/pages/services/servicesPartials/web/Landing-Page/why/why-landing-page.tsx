/**
 * * components
 */

import { CardBenefit } from "../../../../../../custom/partials/CardBenefit";

export const WhyLandingPage = () => {
  return (
    <section className="flex flex-col items-center gap-20 mb-32">
      <h2 className="xs:text-3xl md:text-4xl xs:w-full w-1/2 text-center">
        ¿Porque es importante una{" "}
        <span className="text-yellow-primary">Landing Page?</span>
      </h2>

      <div className="w-full grid xl:grid-cols-1 2xl:grid-cols-3 xs:gap-20 xl:gap-20">
        <CardBenefit
          iconPath="/images/leads.png"
          title="Generas Leads de calidad"
          description="Cuando en la landing page se manejan los formularios de captación se pueden recopilar datos e información valiosa sobre tus visitantes, ayudando a formar una base de datos solida de leads  y prospectos para que puedas realizar mejores seguimientos."
        />
        <CardBenefit
          iconPath="/images/brand.png"
          title="Fortalecimiento de marca"
          description="En las landing page tenemos una gran oportunidad para reforzar el mensaje de marca, si se utiliza un   diseño coherente, buenos copys y elementos graficos de calidad pueden contribuir a una percepción positiva para tu marca, aumentando la confianza de visitantes."
        />
        <CardBenefit
          iconPath="/images/growthSales.png"
          title="Aumentas tu conversion"
          description="Una landing page con enfoque claro, bien diseñada y optimizada facilita a las personas que visitan a tomar una acción en especifico, como completar un formulario, comprar o descargar un recurso, siendo un excelente medio para mejorar la conversión."
        />
      </div>
    </section>
  );
};
