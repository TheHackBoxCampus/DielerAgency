/**
 * interfaces
 */
import { MainPageLayout } from "../../interfaces/layout/main-page-layout-interface";

const MainPageLayout = ({ children }: MainPageLayout): React.ReactNode => {
  return (
    <main className="">
        { children }
    </main>
  );
};

export { MainPageLayout };
