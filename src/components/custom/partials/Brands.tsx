/**
 * types
 */
import { RN } from "../../../types/FunctionalComponent.type";

const Brands = (): RN => {
  return (
    <section className="flex flex-col gap-5 my-32">
      <h3 className="text-center text-4xl m-auto font-bold">
        NO ESTAMOS SOLOS, ELLOS CONFIARON EN NOSOTROS
      </h3>
      <img className="text-center object-cover rounded-2xl" src="/images/brands.png" alt="brands" />
    </section>
  );
};

export { Brands };
