import { Fragment } from "react";
import { EcommerceLayout } from "../../../interfaces/layout/Ecommerce-layout-interface";

const EcommerceLayout = ({ children }: EcommerceLayout): React.ReactNode => {
  return <Fragment>{children}</Fragment>;
};

export { EcommerceLayout };
