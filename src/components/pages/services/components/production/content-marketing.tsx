import { WhatContentMarketing } from "../../servicesPartials/production/content-marketing/what/what-content-marketing";
import { WhyContentMarketing } from "../../servicesPartials/production/content-marketing/why/why-content-marketing";
import { HowContentMarketing } from "../../servicesPartials/production/content-marketing/how/how-content-marketing";
import { FormConvertion } from "../../../../custom/partials/form-convertion";
import { Footer } from "../../../../custom/partials/Footer";

export const ContentMarketing = () => {
  return (
    <>
      <WhatContentMarketing />
      <main>
        <WhyContentMarketing />
        <HowContentMarketing />
      </main>
      <section className="flex w-full justify-center mb-20">
        <FormConvertion width="xs:w-[90%] xl:w-[50%]" />
      </section>
      <Footer />
    </>
  );
};
