import { Fragment } from "react";
import { LandingPageLayout } from "../../../interfaces/layout/landing-page-layout";

const LandingPageLayout = ({
  children,
}: LandingPageLayout): React.ReactNode => {
  return <Fragment>{children}</Fragment>;
};

export { LandingPageLayout };
