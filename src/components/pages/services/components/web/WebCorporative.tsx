/**
 * * components
 */

import { WhatWebCorporative } from "../../servicesPartials/web/webcorporative/what/what-web-corporative";
import { WhyWebCorporative } from "../../servicesPartials/web/webcorporative/why/why-web-corporative";
import { HowWebCorporative } from "../../servicesPartials/web/webcorporative/how/how-web-corporative";
import { Footer } from "../../../../custom/partials/Footer";
import { FormConvertion } from "../../../../custom/partials/form-convertion";

export const WebCorporative = () => {
  return (
    <>
      <WhatWebCorporative />
      <main>
        <WhyWebCorporative />
        <HowWebCorporative />
      </main>
      <section className="flex w-full justify-center mb-20">
        <FormConvertion width="xs:w-[90%] xl:w-[50%]" />
      </section>
      <Footer />
    </>
  );
};
