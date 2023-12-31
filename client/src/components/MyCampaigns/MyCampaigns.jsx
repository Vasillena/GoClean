import { useState, useEffect, useContext } from "react";
import CampaignCard from "../ActiveCampaigns/CampaignCard/CampaignCard";
import { AuthContext } from "../../contexts/AuthContext";
import { campaignServiceFactory } from "../../services/campaignService";
import MyProfile from "../MyProfile/MyProfile";

export default function MyCampaigns() {
  const { userId } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);
  const campaignService = campaignServiceFactory();
  const [selectedTab, setSelectedTab] = useState("MyCampaigns");

  useEffect(() => {
    campaignService
      .getAll()
      .then((result) => setCampaigns(result))
      .catch((error) => console.log(error));
  }, []);

  const ownerCampaigns = campaigns.filter(
    (campaign) => campaign._ownerId === userId
  );

  const savedCampaignsObject =
    JSON.parse(localStorage.getItem("savedCampaigns")) || {};
  const savedCampaigns = Object.keys(savedCampaignsObject).filter(
    (campaignId) => savedCampaignsObject[campaignId] === true
  );

  const renderCampaigns = () => {
    if (selectedTab === "MyCampaigns") {
      return (
        <div
          className="cards"
          style={{
            opacity: 0,
            animation: "sliderReveal 1s ease forwards",
            animationDelay: "0.6s",
          }}
        >
          {ownerCampaigns.length > 0 ? (
            ownerCampaigns.map((x) => <CampaignCard key={x._id} {...x} />)
          ) : (
            <div className="no-campaigns">
              <p>
                {ownerCampaigns.length === 0
                  ? "You don't have any campaigns, yet!"
                  : "An error occurred while fetching campaigns. Please try again later."}{" "}
              </p>
            </div>
          )}
        </div>
      );
    } else if (selectedTab === "SavedCampaigns") {
      return (
        <div
          className="cards"
          style={{
            opacity: 0,
            animation: "sliderReveal 1s ease forwards",
            animationDelay: "0.6s",
          }}
        >
          {savedCampaigns.length > 0 ? (
            savedCampaigns.map((x) => {
              const campaign = campaigns.find((c) => c._id === x);
              return <CampaignCard key={x} {...campaign} />;
            })
          ) : (
            <div className="no-campaigns">
              <p>
                {savedCampaigns.length === 0
                  ? "You haven't saved any campaigns, yet!"
                  : "An error occurred while fetching campaigns. Please try again later."}{" "}
              </p>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <section
      className="my-campaigns"
      style={{
        background: "url(/images/hero-img-2.png)",
        backgroundSize: "100% auto",
        backgroundPosition: "center 0",
        backgroundRepeat: "no-repeat",
      }}
    >
      <MyProfile />
      <div className="titles">
        <div
          className={`title ${selectedTab === "MyCampaigns" ? "active" : ""}`}
          onClick={() => setSelectedTab("MyCampaigns")}
        >
          <h2 className={selectedTab === "MyCampaigns" ? "bold-text" : ""}>
            My Campaigns
          </h2>
        </div>
        <div className="title">
          <h2>|</h2>
        </div>
        <div
          className={`title ${
            selectedTab === "SavedCampaigns" ? "active" : ""
          }`}
          onClick={() => setSelectedTab("SavedCampaigns")}
        >
          <h2 className={selectedTab === "SavedCampaigns" ? "bold-text" : ""}>
            Saved Campaigns
          </h2>
        </div>
      </div>
      <div className="divider-container">
        <div className="divider"></div>
      </div>
      {renderCampaigns()}
    </section>
  );
}
