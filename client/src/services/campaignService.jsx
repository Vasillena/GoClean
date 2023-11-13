import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/campaigns";

export const campaignServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const result = await request.get(baseUrl);
    const campaigns = Object.values(result);

    return campaigns;
  };

  const getOne = async (campaignId) => {
    const result = await request.get(`${baseUrl}/${campaignId}`);

    return result;
  };

  const create = async (campaignData) => {
    const result = await request.post(baseUrl, campaignData);

    return result;
  };

  const edit = (campaignId, data) =>
    request.put(`${baseUrl}/${campaignId}`, data);

  const deleteCampaign = (campaignId) =>
    request.delete(`${baseUrl}/${campaignId}`);
    

  return {
    getAll,
    getOne,
    create,
    edit,
    delete: deleteCampaign,
  };
};
