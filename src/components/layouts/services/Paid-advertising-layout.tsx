import { Fragment } from "react";
import { PaidAdvertisingLayout } from "../../../interfaces/layout/Paid-advertising-layout";

const PaidAdvertisingLayout = ({
  children,
}: PaidAdvertisingLayout): React.ReactNode => {
  return <Fragment>{children}</Fragment>;
};

export { PaidAdvertisingLayout };
