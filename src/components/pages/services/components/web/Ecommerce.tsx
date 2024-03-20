/**
 * * components
 */
import { WhatEcommerce } from "../../servicesPartials/web/e-commerce/what/what-ecommerce";
import { WhyEcommerce } from "../../servicesPartials/web/e-commerce/why/why-ecommerce";
import { HowEcommerce } from "../../servicesPartials/web/e-commerce/how/how-ecommerce";
import { Footer } from "../../../../custom/partials/Footer";
import { FormConvertion } from "../../../../custom/partials/form-convertion";

export const Ecommerce = () => {
  return (
    <>
      <WhatEcommerce />
      <main>
      <WhyEcommerce />
      <HowEcommerce />
      </main>
      <section className="flex w-full justify-center mb-20">
        <FormConvertion width="xs:w-[90%] xl:w-[50%]" />
      </section>
      <Footer />
    </>
  );
};
