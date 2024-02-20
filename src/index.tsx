/**
 * pages
 */
import HomePage from "./components/pages/home-page";
import MainPage from "./components/pages/main-page";
/**
 * layout
 */
import { HomePageLayout } from "./components/layouts/home-page-layout";
import { MainPageLayout } from "./components/layouts/Main-page-layout";

/**
 * routes [react router DOM]
 */

function App() {
  return (
    <div id="container" className="w-[70%] m-auto">
      <HomePageLayout><HomePage /></HomePageLayout>
      <MainPageLayout><MainPage /></MainPageLayout>
    </div>
  );
}

export default App;
