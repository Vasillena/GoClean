import { useState, useContext } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function CampaignOwner({ children, isOwner }) {
  const [campaigns, setCampaigns] = useState([]);
  const { campaignId } = useParams();
  const { userId } = useContext(AuthContext);

  const currentCampaign = campaigns.find(
    (campaign) => campaign._id === campaignId
  );

  if (!isOwner && currentCampaign && currentCampaign._ownerId !== userId) {
    return <Navigate to={`/activeCampaigns/${campaignId}`} replace />;
  }

  return children ? children : <Outlet />;
}
