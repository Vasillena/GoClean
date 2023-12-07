import "./App.css";

import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import {
  IsAuthRouteGuard,
  IsNotAuthRouteGuard,
} from "./components/common/RouteGuard";

import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import GoGreen from "./components/GoGreen/GoGreen";
import ActiveCampaigns from "./components/ActiveCampaigns/ActiveCampaigns";
import CreateCampaign from "./components/CreateCampaign/CreateCampaign";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import EditCampaign from "./components/EditCampaign/EditCampaign";
import CampaignDetails from "./components/CampaignDetails/CampaignDetails";
import Logout from "./components/Logout/Logout";
import MyCampaigns from "./components/MyCampaigns/MyCampaigns";
import ThankYou from "./components/ThankYou/ThankYou";
import ErrorPage from "./components/ErrorPage/ErrorPage";

import CampaignOwner from "./components/common/CampaignOwner";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Weather from "./components/Weather/Weather";
import BackToTop from "./components/BackToTop/BackToTop";

function App() {
  return (
    <AuthProvider>
      <>
        <ScrollToTop />
        <Navigation />
        <Weather />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<IsAuthRouteGuard />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route path="/activeCampaigns" element={<ActiveCampaigns />} />
            <Route
              path="/activeCampaigns/:campaignId"
              element={<CampaignDetails />}
            />
            <Route element={<IsNotAuthRouteGuard />}>
              <Route path="/createCampaign" element={<CreateCampaign />} />
              <Route
                path="/activeCampaigns/:campaignId/editCampaign"
                element={
                  <CampaignOwner>
                    <EditCampaign />
                  </CampaignOwner>
                }
              />
              <Route path="/myCampaigns" element={<MyCampaigns />} />
              <Route path="/logout" element={<Logout />} />
            </Route>

            <Route path="/goGreen" element={<GoGreen />} />
            <Route path="/thankYou" element={<ThankYou />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <BackToTop />
        <Footer />
      </>
    </AuthProvider>
  );
}

export default App;
