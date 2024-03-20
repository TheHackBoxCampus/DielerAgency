/** 
 * * components
 */

import { Footer } from "../../../../custom/partials/Footer";
import { FormConvertion } from "../../../../custom/partials/form-convertion";
import { HowLandingPage } from "../../servicesPartials/web/Landing-Page/how/how-landing-page";
import { WhatLandingPage } from "../../servicesPartials/web/Landing-Page/what/what-landing-page";
import { WhyLandingPage } from "../../servicesPartials/web/Landing-Page/why/why-landing-page";

export const LandingPage = () => {
  return (
    <>
      <WhatLandingPage />
      <main>
        <WhyLandingPage />
        <HowLandingPage />
      </main>
      <section className="flex w-full justify-center mb-20">
        <FormConvertion width="xs:w-[90%] xl:w-[50%]" />
      </section>
      <Footer />
    </>
  );
};
