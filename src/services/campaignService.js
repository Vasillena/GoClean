import * as request from "./requester.js";

const baseUrl = "http://localhost:3030/data/campaigns";

export const getAll = async () => {
  const result = await request.get(baseUrl);
  const campaigns = Object.values(result);

  return campaigns;
};

export const getOne = async (campaignId) => {
  const result = await request.get(`${baseUrl}/${campaignId}`);

  return result;
};

export const create = async (campaignData) => {
  const result = await request.post(baseUrl, campaignData);

  return result;
};
