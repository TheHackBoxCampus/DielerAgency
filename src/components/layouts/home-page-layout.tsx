/**
 * interfaces
 */
import { HomePageLayout } from "../../interfaces/layout/home-page-layout-interface";

/**
 * components
 */
import { Nav } from "../custom/partials/Nav";
/**
 * * animate.css - v4.1.1 - https://github.com/animate-css/animate.css/blob/main/
 * * Copyright 2021 Daniel Eden (“Licensor”)
 */

import "animate.css";

/**
 * custom elements.
 */

import { FormConvertion } from "../custom/partials/form-convertion";

const HomePageLayout = ({ children }: HomePageLayout): React.ReactNode => {
  return (
    <header className="h-auto mb-20 flex flex-col">
      <Nav /> {/** navbar */}
      <div className="xs:w-full mt-10 h-3/4 xs:block mdx:flex justify-between items-center ">
        {children}
        <FormConvertion
          width="xs:w-full mdx:w-[60%] 2xl:w-[40%]"
          margin="xs:mt-20 mdx:m-0"
        />
      </div>
    </header>
  );
};

export { HomePageLayout };
