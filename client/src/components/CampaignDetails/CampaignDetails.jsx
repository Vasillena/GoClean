import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useService } from "../../hooks/useService";
import { campaignServiceFactory } from "../../services/campaignService";
import { AuthContext } from "../../contexts/AuthContext";
import { useCampaignContext } from "../../contexts/CampaignContext";

export default function CampaignDetails() {
  const { userId, isAuthenticated } = useContext(AuthContext);
  const { campaignId } = useParams();
  const [campaign, setCampaign] = useState({});
  const campaignService = useService(campaignServiceFactory);
  const { deleteCampaign } = useCampaignContext();
  const navigate = useNavigate();
  const { joinedUsers, joinCampaign } = useCampaignContext();

  const [savedCampaigns, setSavedCampaigns] = useState(
    JSON.parse(localStorage.getItem("savedCampaigns")) || {}
  );

  useEffect(() => {
    campaignService.getOne(campaignId).then((result) => {
      setCampaign(result);
    });
  }, [campaignId, campaignService]);

  const isOwner = campaign._ownerId === userId;

  const onDeleteClick = async () => {
    const result = window.confirm(
      "You are about to delete the current campaign! Proceed?"
    );

    if (result) {
      await campaignService.delete(campaign._id);

      deleteCampaign(campaign._id);

      navigate("/activeCampaigns");
    }
  };

  const onJoinClick = () => {
    if (!joinedUsers[campaignId]?.includes(userId)) {
      joinCampaign(campaignId, userId);
    }
  };

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const localStorageValue = localStorage.getItem(`saved_${campaign._id}`);
    setIsSaved(savedCampaigns[campaign._id] || (localStorageValue === "true"));
  }, [campaign._id, savedCampaigns]);

  const onSaveClick = () => {
    const newIsSaved = !isSaved;

    setIsSaved(newIsSaved);

    const newSavedCampaigns = { ...savedCampaigns, [campaign._id]: newIsSaved };
    setSavedCampaigns(newSavedCampaigns);

    localStorage.setItem("savedCampaigns", JSON.stringify(newSavedCampaigns));
  };

  return (
    <section
      className="campaign-details-section"
      style={{
        background: "url(/images/active-campaigns.svg)",
        backgroundSize: "100% auto",
        backgroundPosition: "center 0",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="card-details-container">
        <div className="details-img-container">
          <img src={campaign.locationUrl} alt="Location img" />
        </div>
        <div className="details-content-container">
          <div className="card-saved" onClick={onSaveClick}>
            {isSaved ? (
              <img src="/images/bookmark-solid.svg" alt="bookmark" />
            ) : (
              <img src="/images/bookmark-regular.svg" alt="bookmark" />
            )}
          </div>
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
            <p>By {campaign.username}</p>
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
              <>
                <p className="counter">
                  Total joined: {joinedUsers[campaignId]?.length || 0}
                </p>
                <div className="card-action-btn">
                  <button
                    className={`join-button ${joinedUsers[campaignId]?.includes(userId) ? 'disabled' : ''}`}
                    onClick={onJoinClick}
                    disabled={joinedUsers[campaignId]?.includes(userId)}
                  >
                    Join
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
