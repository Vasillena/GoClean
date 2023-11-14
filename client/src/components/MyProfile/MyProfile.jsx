import { useContext, useEffect, useState } from "react";
import { useCampaignContext } from "../../contexts/CampaignContext";
import { AuthContext } from "../../contexts/AuthContext";

export default function MyProfile() {

  const [profileName, setProfileName] = useState('')
    const { campaigns } = useCampaignContext();
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    const localStorageValue = localStorage.getItem('auth')
    const parsedValue = JSON.parse(localStorageValue)
    if(localStorageValue){
      setProfileName(parsedValue.name)
    }
  }, [])

      const filteredCampaigns = campaigns.filter((campaign) =>
    campaign._ownerId === userId
  );


  return (
    <section
      className="my-profile-section"
      //   style={{
      //     background: "url(/images/thank-you.svg)",
      //     backgroundSize: "60% auto",
      //     backgroundPosition: "center 60%",
      //     backgroundRepeat: "no-repeat",
      //   }}
    >
      <div className="my-profile-container">
        <div className="user-img">
          <img src="./images/our-pride-2.jpg" alt="user-img" />
        </div>
        <div className="user-name">
          <h3>{profileName}</h3>
        </div>
        <div className="user-total-campaigns">
          <p>Campaigns posted: {filteredCampaigns.length}</p>
        </div>
        <div className="rank">
          {/* <p>Rank:</p> */}
        </div>
      </div>
    </section>
  );
}
