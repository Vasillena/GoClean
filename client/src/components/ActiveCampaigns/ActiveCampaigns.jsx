import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { campaignServiceFactory } from "../../services/campaignService";
import CampaignCard from "./CampaignCard/CampaignCard";

export default function ActiveCampaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const campaignService = campaignServiceFactory();
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    campaignService
      .getAll()
      .then((result) => setCampaigns(result))
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderCampaigns = () => {
    if (filteredCampaigns.length > 0) {
      return filteredCampaigns.map((x) => <CampaignCard key={x._id} {...x} />);
    } else if (error) {
      return (
        <div className="error-message">
          <p>
            An error occurred while fetching campaigns. Please try again later.
          </p>
        </div>
      );
    } else {
      return (
        <div className="no-campaigns">
          <p>
            No available campaigns at the moment!{" "}
            <Link to="/createCampaign">Create one...</Link>
          </p>
        </div>
      );
    }
  };

  return (
    <section
      className="campaigns-section"
      style={{
        background: "url(/images/hero-img-2.png)",
        backgroundSize: "100% auto",
        backgroundPosition: "center 0",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="campaigns-text">
        <h1>Join hands for a cleaner world, start your own clean campaign</h1>
        <p>
          We empower individuals like you to make a direct impact on the
          environment by organizing your own clean campaigns. You have the
          freedom to choose any spot or area that needs cleaning, whether it's a
          park, beach, neighborhood, or public space.
        </p>
        <p>
          Create a campaign with a clear description of the location, date, and
          time, inviting others to join your cause. Share your passion for
          cleaning up the environment, the significance of the chosen area, and
          why it matters to you. Inspire others to take part in this collective
          effort to create a cleaner world.
        </p>
        <p>
          Together, we can create a cleaner, healthier, and more beautiful
          world, one campaign at a time.
        </p>
        <div className="all-campaigns">
          <h3>Active Campaigns</h3>
          <div className="divider-container">
            <div className="divider"></div>
          </div>
          <div className="search">
            <div className="search-element">
              <label htmlFor="search" />
              <input
                value={searchQuery}
                onChange={handleSearch}
                type="text"
                id="search"
                name="search"
                placeholder="Search location..."
              />
            </div>
            <div className="active-campaigns">{renderCampaigns()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
