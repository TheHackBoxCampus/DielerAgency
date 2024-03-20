import { Fragment } from "react";
import { ContentMarketingLayout } from "../../../interfaces/layout/content-marketing";

const ContentMarketingLayout = ({
  children,
}: ContentMarketingLayout): React.ReactNode => {
  return <Fragment>{children}</Fragment>;
};

export { ContentMarketingLayout };
