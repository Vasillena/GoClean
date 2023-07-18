import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useCampaignContext } from "../../contexts/CampaignContext";
import CampaignCard from "../ActiveCampaigns/CampaignCard/CampaignCard";
import { AuthContext } from "../../contexts/AuthContext";

export default function MyCampaigns() {
  const { campaigns } = useCampaignContext();
  const { userId } = useContext(AuthContext);

  // Filter the campaigns where you are the owner
  const ownerCampaigns = campaigns.filter(
    (campaign) => campaign._ownerId === userId
  );

  return (
    <div className="all-campaigns">
      <h3>My Campaigns</h3>
      {ownerCampaigns.length > 0 ? (
        ownerCampaigns.map((x) => <CampaignCard key={x._id} {...x} />)
      ) : (
        <div className="no-campaigns">
          <img src="./images/active-campaigns-2.jpg" alt="Hands" />
          <p>
            No available campaigns at the moment!{" "}
            <Link to="/createCampaign">Create one...</Link>
          </p>
        </div>
      )}
    </div>
  );
}
