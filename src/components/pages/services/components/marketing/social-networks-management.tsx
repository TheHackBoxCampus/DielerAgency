/**
 * * components
 */
import { WhatSocialNetworksManagement } from "../../servicesPartials/marketing/social-networks-management/what/what-social-networks-management";
import { WhySocialNetworkManagement } from "../../servicesPartials/marketing/social-networks-management/why/why-social-networks-management";
import { HowSocialNetworksManagement } from "../../servicesPartials/marketing/social-networks-management/how/how-networks-management";
import { FormConvertion } from "../../../../custom/partials/form-convertion";
import { Footer } from "../../../../custom/partials/Footer";

export const SocialNetworksManagement = () => {
  return (
    <>
      <WhatSocialNetworksManagement />
      <main>
        <WhySocialNetworkManagement />
        <HowSocialNetworksManagement />
      </main>
      <section className="flex w-full justify-center mb-20">
        <FormConvertion width="xs:w-[90%] xl:w-[50%]" />
      </section>
      <Footer />
    </>
  );
};
