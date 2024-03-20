import { Fragment } from "react";
import { WebCorporativeLayout } from "../../../interfaces/layout/web-corporative-layout";

const WebCorporativeLayout = ({
  children,
}: WebCorporativeLayout): React.ReactNode => {
  return <Fragment>{children}</Fragment>;
};

export { WebCorporativeLayout };
