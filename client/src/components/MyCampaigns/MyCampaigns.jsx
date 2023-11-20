import { useContext } from "react";
import { Link } from "react-router-dom";
import { useCampaignContext } from "../../contexts/CampaignContext";
import CampaignCard from "../ActiveCampaigns/CampaignCard/CampaignCard";
import { AuthContext } from "../../contexts/AuthContext";
import MyProfile from "../MyProfile/MyProfile";

export default function MyCampaigns() {
  const { campaigns } = useCampaignContext();
  const { userId } = useContext(AuthContext);

  const ownerCampaigns = campaigns.filter(
    (campaign) => campaign._ownerId === userId
  );

     const savedCampaigns = campaigns.filter((campaign) => {
    const isSaved = localStorage.getItem(`saved_${campaign._id}`);
    return isSaved === "true";
  });

  return (
    <section
      className="my-campaigns"
      // style={{
      //   background: "url(/images/my-campaigns.svg)",
      //   backgroundSize: "100% auto",
      //   backgroundPosition: "center 0",
      //   backgroundRepeat: "no-repeat",
      // }}
          style={{
        background: "url(/images/hero-img.png)",
        backgroundSize: "100% auto",
        backgroundPosition: "center 0",
        backgroundRepeat: "no-repeat",
      }}
    >
      <MyProfile />
      <div className="my-campaigns-cards">
        <div className="title">
          <h2>My Campaigns</h2>
        </div>
        <div className="cards">
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
      </div>
        <div className="saved-campaigns-cards">
        <div className="title">
          <h2>Saved Campaigns</h2>
        </div>
        <div className="cards">
          {savedCampaigns.length > 0 ? (
            savedCampaigns.map((x) => <CampaignCard key={x._id} {...x} />)
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
      </div>
    </section>
  );
}
