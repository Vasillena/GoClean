import "./App.css";

import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import CampaignProvider from "./contexts/CampaignContext";

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
import {
  IsAuthRouteGuard,
  IsNotAuthRouteGuard,
} from "./components/common/RouteGuard";
import CampaignOwner from "./components/common/CampaignOwner";
import MyCampaigns from "./components/MyCampaigns/MyCampaigns";
import ThankYou from "./components/ThankYou/ThankYou";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <AuthProvider>
      <CampaignProvider>
        <>
          <Navigation />
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
          <Footer />
        </>
      </CampaignProvider>
    </AuthProvider>
  );
}

export default App;
