import "./App.css";

import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { campaignServiceFactory } from "./services/campaignService";
import { AuthProvider } from "./contexts/AuthContext";

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

function App() {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  // const campaignService = campaignServiceFactory(auth.accessToken);
  const campaignService = campaignServiceFactory();

  useEffect(() => {
    campaignService.getAll().then((result) => {
      setCampaigns(result);
    });
  }, []);
  // }, [campaignService]);

  const onCreateCampaignSubmit = async (data) => {
    const newCampaign = await campaignService.create(data);

    setCampaigns((state) => [...state, newCampaign]);

    navigate("/activeCampaigns");
  };

  const onCampaignEditSubmit = async (values) => {
    const result = await campaignService.edit(values._id, values);

    setCampaigns((state) =>
      state.map((x) => (x._id === values._id ? result : x))
    );

    navigate(`/activeCampaigns/${values._id}`);
  };

  return (
    <AuthProvider>
      <>
        <Navigation />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route
              path="/activeCampaigns"
              element={<ActiveCampaigns campaigns={campaigns} />}
            />
            <Route
              path="/createCampaign"
              element={
                <CreateCampaign
                  onCreateCampaignSubmit={onCreateCampaignSubmit}
                />
              }
            />
            <Route
              path="/activeCampaigns/:campaignId"
              element={<CampaignDetails />}
            />
            <Route
              path="/activeCampaigns/:campaignId/editCampaign"
              element={
                <EditCampaign onCampaignEditSubmit={onCampaignEditSubmit} />
              }
            />
            <Route path="/goGreen" element={<GoGreen />} />
          </Routes>
        </main>
        <Footer />
      </>
    </AuthProvider>
  );
}

export default App;
