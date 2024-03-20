/**
 * * components
 */

import { CardBenefit } from "../../../../../../custom/partials/CardBenefit";

export const WhyWebCorporative = () => {
  return (
    <section className="flex flex-col items-center gap-20 mb-32">
      <h2 className="xs:text-3xl md:text-4xl xs:w-full w-1/2 text-center">
        ¿Porque es importante una{" "}
        <span className="text-yellow-primary">pagina web corporativa?</span>
      </h2>

      <div className="w-full grid xl:grid-cols-1 2xl:grid-cols-3 xs:gap-20 xl:gap-20">
        <CardBenefit
          iconPath="/images/magnet.png"
          title="Atraes Clientes potenciales"
          description="Utilizamos diferentes herramientas para el desarrollo de tu sitio web, permitiendo la recepcion de diferente publico, con tecnicas de posicionamiento efectivas on-page y una optimización de contenidos que permite que tu sitio web se expanda"
        />
        <CardBenefit
          iconPath="/images/conversion.png"
          title="Aumentas tu tasa de conversion"
          description="Con las estructuras de conversión nuestros profesionales se ajustan a las necesidades de nuestros clientes llevando al consumidor en una ruta mas directa, provocando una mejor experiencia de usuario y un enganche que concluya en un cierre efectivo"
        />
        <CardBenefit
          iconPath="/images/winner.png"
          title="Certificas tu NEGOCIO"
          description="Si cuentas con una pagina web corporativa de alta calidad para tu negocio o empresa, brindas a tus futuros prospectos una mejor proyección de  lo que haces, permitiendo tener una garantia de ante mano y mas posibilidades de una conversion. "
        />
      </div>
    </section>
  );
};
