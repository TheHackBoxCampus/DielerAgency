/**
 * * components
 */
import { WhatPaidAdvertising } from "../../servicesPartials/marketing/paid-advertising/what/what-paid-advertising";
import { WhyPaidAdvertising } from "../../servicesPartials/marketing/paid-advertising/why/why-paid-advertising";
import { HowPaidAdvertising } from "../../servicesPartials/marketing/paid-advertising/how/how-paid-advertising";
import { FormConvertion } from "../../../../custom/partials/form-convertion";
import { Footer } from "../../../../custom/partials/Footer";

export const PaidAdvertising = () => {
  return (
    <>
      <WhatPaidAdvertising />
      <main>
        <WhyPaidAdvertising />
        <HowPaidAdvertising />
      </main>
      <section className="flex w-full justify-center mb-20">
        <FormConvertion width="xs:w-[90%] xl:w-[50%]" />
      </section>
      <Footer />
    </>
  );
};
