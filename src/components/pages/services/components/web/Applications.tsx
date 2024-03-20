/**
 * * components
 */

import { WhatAplications } from "../../servicesPartials/web/app/what/what-applications";
import { WhyApplications } from "../../servicesPartials/web/app/why/why-applications";
import { HowApplications } from "../../servicesPartials/web/app/how/how-applications";
import { FormConvertion } from "../../../../custom/partials/form-convertion";
import { Footer } from "../../../../custom/partials/Footer";

export const Aplications = () => {
  return (
    <>
      <WhatAplications />
      <main>
        <WhyApplications />
        <HowApplications />
      </main>
      <section className="flex w-full justify-center mb-20">
        <FormConvertion width="xs:w-[90%] xl:w-[50%]" />
      </section>
      <Footer />
    </>
  );
};
