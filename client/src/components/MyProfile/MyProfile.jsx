import { useState, useEffect, useContext } from "react";
import { useCampaignContext } from "../../contexts/CampaignContext";
import { AuthContext } from "../../contexts/AuthContext";

export default function MyProfile() {
  const [profileName, setProfileName] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState("");
  const { campaigns } = useCampaignContext();
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    const localStorageValue = localStorage.getItem("auth");
    const parsedValue = JSON.parse(localStorageValue);
    if (localStorageValue) {
      setProfileName(parsedValue.username);
      setProfileImageUrl(parsedValue.profileImageUrl);
    }
  }, []);

  const filteredCampaigns = campaigns.filter(
    (campaign) => campaign._ownerId === userId
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
       setNewImageUrl("");
  };

  const handleImageUrlChange = (event) => {
    setNewImageUrl(event.target.value);
  };

  const handleSaveImageUrl = () => {
  setProfileImageUrl(newImageUrl);

  const localStorageValue = localStorage.getItem("auth");
  const parsedValue = JSON.parse(localStorageValue);
  if (localStorageValue) {
    localStorage.setItem(
      "auth",
      JSON.stringify({
        ...parsedValue,
        profileImageUrl: newImageUrl,
      })
    );
  }
    setNewImageUrl("");
  closeModal();
};


  return (
    <section className="my-profile-section">
      <div className="my-profile-container">
        <div className="user-img">
          <img
            src={profileImageUrl || "./images/profile-avatar.jpg"}
            alt="user-img"
          />
          <div className="change-buttons">
                <button className="change-img-button" onClick={openModal}>Change Profile Picture</button>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <p>Paste your image URL:</p>
                <input
                  type="text"
                  value={newImageUrl}
                  onChange={handleImageUrlChange}
                />
                <button className="save-img-button" onClick={handleSaveImageUrl}>Save</button>
                <button className="close-img-button" onClick={closeModal}>Cancel</button>
              </div>
            </div>
          )}
          </div>
      
        </div>
        <div className="user-text">
          <div className="user-name">
            <h3>{profileName}</h3>
          </div>
          <div className="user-total-campaigns">
            <p>Campaigns posted: {filteredCampaigns.length}</p>
          </div>
          <div className="rank">
            <p>
              Rank:{" "}
              {filteredCampaigns.length <= 10
                ? "Eco-explorer"
                : filteredCampaigns.length > 10 &&
                  filteredCampaigns.length <= 20
                ? "Eco-Champion"
                : "Eco-Mastermind"}
            </p>
            <div className="question">
              <img
                src="./images/circle-question-solid.svg"
                alt="question-mark"
              />
            </div>
            <div className="message">
              <p>Eco-explorer: 0-10 campaigns</p>
              <p>Eco-champion: 11-20 campaigns</p>
              <p>Eco-mastermind: 21 + campaigns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
