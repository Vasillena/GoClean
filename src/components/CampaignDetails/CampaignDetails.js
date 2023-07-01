import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useService } from "../../hooks/useService";
import { campaignServiceFactory } from "../../services/campaignService";
import { AuthContext } from "../../contexts/AuthContext";

export default function CampaignDetails() {
  //   {
  //   _id,
  //   username,
  //   location,
  //   date,
  //   time,
  //   locationUrl,
  //   description,
  // }
  const { userId, isAuthenticated } = useContext(AuthContext);
  const { campaignId } = useParams();
  const [campaign, setCampaign] = useState({});
  const campaignService = useService(campaignServiceFactory);
  const navigate = useNavigate();

  useEffect(() => {
    campaignService.getOne(campaignId).then((result) => {
      setCampaign(result);
    });
  }, [campaignId]);
  // }, [campaignId, campaignService]);

  const isOwner = campaign._ownerId === userId;

  const onDeleteClick = async () => {
    await campaignService.delete(campaign._id);

    // TODO: delete from state

    navigate("/activeCampaigns");
  };

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
            {isOwner && (
              <>
                <div className="card-action-btn">
                  <Link to={`/activeCampaigns/${campaign._id}/editCampaign`}>
                    EDIT
                  </Link>
                </div>
                <div className="card-action-btn">
                  <button className="delete-button" onClick={onDeleteClick}>
                    DELETE
                  </button>
                </div>
              </>
            )}
            {!isOwner && isAuthenticated && (
              <div className="card-action-btn">
                <Link to="#">JOIN</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
