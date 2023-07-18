// import { useContext } from "react";
// import { Navigate, Outlet, useParams } from "react-router-dom";
// import { AuthContext } from "../../contexts/AuthContext";
// import { useCampaignContext } from "../../contexts/CampaignContext";

// export default function CampaignOwner({ children }) {
//   const { campaignId } = useParams();
//   const { getCampaign } = useCampaignContext();
//   const { userId } = useContext(AuthContext);

//   const currentCampaign = getCampaign(campaignId);

//   if (currentCampaign && currentCampaign._ownerId !== userId) {
//     return <Navigate to={`/activeCampaigns/${campaignId}`} replace />;
//   }
//   return children ? children : <Outlet />;
// }

import { useContext } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useCampaignContext } from "../../contexts/CampaignContext";

export default function CampaignOwner({ children, isOwner }) {
  const { campaignId } = useParams();
  const { getCampaign } = useCampaignContext();
  const { userId } = useContext(AuthContext);

  const currentCampaign = getCampaign(campaignId);

  if (!isOwner && currentCampaign && currentCampaign._ownerId !== userId) {
    return <Navigate to={`/activeCampaigns/${campaignId}`} replace />;
  }

  return children ? children : <Outlet />;
}
