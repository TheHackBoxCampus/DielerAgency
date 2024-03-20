/**
 * * components
 */

import { CardBenefit } from "../../../../../../custom/partials/CardBenefit";

export const WhyEcommerce = () => {
  return (
    <section className="flex flex-col items-center gap-20 mb-32">
      <h2 className="xs:text-3xl md:text-4xl xs:w-full w-1/2 text-center">
        ¿Porque es importante tener un{" "}
        <span className="text-yellow-primary">E-commerce?</span>
      </h2>

      <div className="w-full grid xl:grid-cols-1 2xl:grid-cols-3 xs:gap-20 xl:gap-20">
        <CardBenefit
          iconPath="/images/rocket.png"
          title="Consigue Escalabilidad"
          description="Con un buen E-commerce puedes llegar a mas cantidad de personas, consiguiendo cada vez mejores prospectos, expadiendo la cantidad de productos de  tu catalogo y todo esto sin enfrentar restricciones fisicas asociadas con las tiendas tradicionales. "
        />
        <CardBenefit
          iconPath="/images/available.png"
          title="Disponibilidad 24/7"
          description="Un comercio electronico esta abierto las 24 horas del dia, de los 7 dias de la semana, lo que significa que los propietarios pueden tener un activo y hacer dinero incluso cuando duermen, al tener esta disponiblidad los encargados aumentan sus ventas y rentabilidad."
        />
        <CardBenefit
          iconPath="/images/low-money.png"
          title="Disminuye costos"
          description="Estamos de acuerdo que una tienda virtual es mucho mas economica que una tienda fisica, ¿sabes lo caro que son los arriendos?, en un E-commerce puedes suplir solo el mantenimiento de ella con un gasto mensual 10 veces mas menos que el pagas por un local. "
        />
      </div>
    </section>
  );
};
