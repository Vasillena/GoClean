import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useService } from "../../hooks/useService";
import { campaignServiceFactory } from "../../services/campaignService";

export default function CampaignDetails({
  _id,
  username,
  location,
  date,
  time,
  locationUrl,
  description,
}) {
  const { campaignId } = useParams();
  const [campaign, setCampaign] = useState({});
  const campaignService = useService(campaignServiceFactory);

  useEffect(() => {
    campaignService.getOne(campaignId).then((result) => {
      setCampaign(result);
    });
  }, [campaignId]);

  return (
    <section
      className="campaign-details-section"
      // style={{
      //   background: "url(/images/campaign-details.jpg)",
      //   backgroundSize: "90% auto",
      //   backgroundPosition: "center 0",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="card-details-container">
        <div className="details-img-container">
          <img src={campaign.locationUrl} alt="Location img" />
        </div>
        <div className="details-content-container">
          <div className="card-location">
            <p>{campaign.location}</p>
          </div>
          <div className="card-date">
            <p>{campaign.date}</p>
          </div>
          <div className="card-time">
            <p>{campaign.time}</p>
          </div>
          <div className="card-username">
            <p>{campaign.username}</p>
          </div>
          <div className="card-description">
            <p>{campaign.description}</p>
          </div>
          <div className="card-buttons-container">
            <div className="card-action-btn">
              <Link to={`/activeCampaigns/${_id}/edit`}>EDIT</Link>
            </div>
            <div className="card-action-btn">
              <Link to={`/activeCampaigns/${_id}/delete`}>DELETE</Link>
            </div>

            <div className="card-action-btn">
              <Link to="#">JOIN</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
