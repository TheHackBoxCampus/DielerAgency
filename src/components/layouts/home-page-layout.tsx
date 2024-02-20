/**
 * interfaces
 */
import HomePageLayout from "../../interfaces/layout/home-page-layout-interface";

/**
 * components
 */
import { Nav } from "../custom/partials/Nav";
import { FormConvertion } from "../custom/partials/form-convertion";

/**
 * animations
 */

/**
   animate.css - v4.1.1 - https://github.com/animate-css/animate.css/blob/main/
   Copyright 2021 Daniel Eden (“Licensor”)
*/

import "animate.css";

const HomePageLayout = ({ children }: HomePageLayout): React.ReactNode => {
  return (
    <header className="h-[90vh] flex flex-col">
      <Nav /> {/** navbar */}
      <div className="w-full h-3/4 flex justify-between items-center mt-3">
        {children}
        <FormConvertion />
      </div>
    </header>
  );
};

export { HomePageLayout };
