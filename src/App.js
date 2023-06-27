import "./App.css";

import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import * as campaignService from "./services/campaignService";
import * as authService from "./services/authService";
import { AuthContext } from "./contexts/AuthContext";

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

function App() {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const [auth, setAuth] = useState({});

  useEffect(() => {
    campaignService.getAll().then((result) => {
      setCampaigns(result);
    });
  }, []);

  const onCreateCampaignSubmit = async (data) => {
    const newCampaign = await campaignService.create(data);

    setCampaigns((state) => [...state, newCampaign]);

    navigate("/activeCampaigns");
  };

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      setAuth(result);

      navigate("/");
    } catch (error) {
      console.log("Problem!");
    }
  };

  const context = {
    onLoginSubmit,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={{ context }}>
      <>
        <Navigation />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
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
            <Route path="/editCampaign" element={<EditCampaign />} />
            <Route path="/goGreen" element={<GoGreen />} />
          </Routes>
        </main>
        <Footer />
      </>
    </AuthContext.Provider>
  );
}

export default App;
