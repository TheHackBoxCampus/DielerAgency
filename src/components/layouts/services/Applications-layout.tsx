import { Fragment } from "react";
import { ApplicationsLayout } from "../../../interfaces/layout/applications-layout-interface";

const ApplicationsLayout = ({
  children,
}: ApplicationsLayout): React.ReactNode => {
  return <Fragment>{children}</Fragment>;
};

export { ApplicationsLayout };
