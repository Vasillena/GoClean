import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { campaignServiceFactory } from "../services/campaignService";

export const CampaignContext = createContext();

export default function CampaignProvider({ children }) {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const campaignService = campaignServiceFactory();
  //   const [joinedUsers, setJoinedUsers] = useState({});
  const [joinedUsers, setJoinedUsers] = useState(() => {
    const storedJoinedUsers = localStorage.getItem("joinedUsers");
    return storedJoinedUsers ? JSON.parse(storedJoinedUsers) : {};
  });

  const joinCampaign = (campaignId, userId) => {
    setJoinedUsers((prevJoinedUsers) => ({
      ...prevJoinedUsers,
      [campaignId]: [...(prevJoinedUsers[campaignId] || []), userId],
    }));
  };

  useEffect(() => {
    campaignService.getAll().then((result) => {
      setCampaigns(result);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("joinedUsers", JSON.stringify(joinedUsers));
  }, [joinedUsers]);

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

  const deleteCampaign = (campaignId) => {
    setCampaigns((state) =>
      state.filter((campaign) => campaign._id !== campaignId)
    );
  };

  const getCampaign = (campaignId) => {
    return campaigns.find((campaign) => campaign._id === campaignId);
  };

  const contextValues = {
    campaigns,
    onCreateCampaignSubmit,
    onCampaignEditSubmit,
    deleteCampaign,
    getCampaign,
    joinCampaign,
    joinedUsers,
  };

  return (
    <CampaignContext.Provider value={contextValues}>
      {children}
    </CampaignContext.Provider>
  );
}

export const useCampaignContext = () => {
  const context = useContext(CampaignContext);

  return context;
};