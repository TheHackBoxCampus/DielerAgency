/**
 * types
 */
import { RN } from "../../types/FunctionalComponent.type";

/**
 * components
 */
import { SalesVideo } from "../custom/partials/sales-video";
import { SuccessStories } from "../custom/partials/success-stories";
import { BannerGrowthPartner } from "../custom/partials/BannerGrowthParnet";
import { ComparisionChart } from "../custom/partials/ComparisionChart";
import { CardsOwners } from "../custom/partials/cardsOwners";
import { PackageSpecials } from "../custom/partials/packagesSpecials";
import { Brands } from "../custom/partials/Brands";
import { Contact } from "../custom/partials/Contact";
import { Footer } from "../custom/partials/Footer";
import { FrequentQuestions } from "../custom/partials/FrequentQuestions";

const MainPage = (): RN => {
  return (
    <>
      <SalesVideo />
      <SuccessStories />
      <BannerGrowthPartner />
      <ComparisionChart />
      <CardsOwners />
      <PackageSpecials />
      <Brands />
      <Contact />
      <FrequentQuestions />
      <Footer />
    </>
  );
};
   
export default MainPage;
