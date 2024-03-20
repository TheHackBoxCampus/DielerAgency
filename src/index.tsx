/**
 * component
 */

import { EcommerceLayout } from "./components/layouts/services/Ecommerce-layout";
import { LandingPageLayout } from "./components/layouts/services/LandingPage-layout";
import { WebCorporativeLayout } from "./components/layouts/services/WebCorporative-layout";
import { Home } from "./components/pages/Home";
import { Ecommerce } from "./components/pages/services/components/web/Ecommerce";
import { LandingPage } from "./components/pages/services/components/web/LandingPage";
import { WebCorporative } from "./components/pages/services/components/web/WebCorporative";
import { ApplicationsLayout } from "./components/layouts/services/Applications-layout";
import { Aplications } from "./components/pages/services/components/web/Applications";
import { PaidAdvertisingLayout } from "./components/layouts/services/Paid-advertising-layout";
import { PaidAdvertising } from "./components/pages/services/components/marketing/paid-advertising";
import { SocialNetworksManagementLayout } from "./components/layouts/services/social-Networks-management-layout";
import { SocialNetworksManagement } from "./components/pages/services/components/marketing/social-networks-management";
import { ContentMarketingLayout } from "./components/layouts/services/content-marketing-layout"; 
import { ContentMarketing } from "./components/pages/services/components/production/content-marketing";

/**
 * * routes [react router DOM]
 */
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    children: [
      {
        path: "diseño-web",
        children: [
          {
            path: "pagina-corporativa",
            element: (
              <WebCorporativeLayout>
                <WebCorporative />
              </WebCorporativeLayout>
            ),
          },
          {
            path: "landing-page",
            element: (
              <LandingPageLayout>
                <LandingPage />
              </LandingPageLayout>
            ),
          },
          {
            path: "ecommerce",
            element: (
              <EcommerceLayout>
                <Ecommerce />
              </EcommerceLayout>
            ),
          },
          {
            path: "aplicaciones-web",
            element: (
              <ApplicationsLayout>
                <Aplications />
              </ApplicationsLayout>
            ),
          },
        ],
      },
      {
        path: "marketing",
        children: [ 
          {
            path: "marketing-redes-sociales",
            element: (
              <SocialNetworksManagementLayout>
                <SocialNetworksManagement />
              </SocialNetworksManagementLayout>
            )
          },
          {
            path: "google-ads-meta-ads",
            element: (
              <PaidAdvertisingLayout>
              <PaidAdvertising />
             </PaidAdvertisingLayout>
            )
          }
        ]
      },
      {
        path: "production", 
        children: [
          {
            path: "marketing-contenidos",
            element: (
              <ContentMarketingLayout>
                <ContentMarketing />
              </ContentMarketingLayout>
            )
          }
        ]
      }
    ],
  },
]);

function App() {
  return (
    <div id="container" className="xs:w-[90%] sm:w-[70%] m-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
