import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/campaigns";

export const campaignServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    try {
      const result = await request.get(baseUrl);
      const campaigns = Object.values(result);

      return campaigns;
    } catch (error) {
      console.error("Error getting campaigns:", error);
      throw error;
    }
  };

  const getOne = async (campaignId) => {
    try {
      const result = await request.get(`${baseUrl}/${campaignId}`);

      return result;
    } catch (error) {
      console.error("Error getting campaign:", error);
      throw error;
    }
  };

  const create = async (campaignData) => {
    try {
      const result = await request.post(baseUrl, campaignData);

      return result;
    } catch (error) {
      console.error("Error creating campaign:", error);
      throw error;
    }
  };

  const edit = async (campaignId, data) => {
    try {
      const result = await request.put(`${baseUrl}/${campaignId}`, data);
      return result;
    } catch (error) {
      console.error("Error editing campaign:", error);
      throw error;
    }
  };

  const deleteCampaign = async (campaignId) => {
    try {
      request.delete(`${baseUrl}/${campaignId}`);
    } catch (error) {
      console.error("Error editing campaign:", error);
      throw error;
    }
  };

  return {
    getAll,
    getOne,
    create,
    edit,
    delete: deleteCampaign,
  };
};
