/**
 * pages
 */
import HomePage from "./home-page";
import MainPage from "./main-page";
/**
 * layout
 */
import { HomePageLayout } from "../layouts/home-page-layout";
import { MainPageLayout } from "../layouts/Main-page-layout";
import { RN } from "../../types/FunctionalComponent.type";

export const Home = ():RN => {
  return (
    <>
      <HomePageLayout>
        <HomePage />
      </HomePageLayout>
      <MainPageLayout>
        <MainPage />
      </MainPageLayout>
    </>
  );
};
