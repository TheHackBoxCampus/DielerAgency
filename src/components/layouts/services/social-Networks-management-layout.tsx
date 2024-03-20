import { Fragment } from "react";
import { SocialNetworksManagementLayout } from "../../../interfaces/layout/social-networks-management-layout";

const SocialNetworksManagementLayout = ({
  children,
}: SocialNetworksManagementLayout): React.ReactNode => {
  return <Fragment>{children}</Fragment>;
};

export { SocialNetworksManagementLayout };
