import React from "react";
import { Link } from "react-router-dom";
import { useCampaignContext } from "../../contexts/CampaignContext";
import CampaignCard from "./CampaignCard/CampaignCard";
// import MyCampaigns from "../MyCampaigns/MyCampaigns"

export default function ActiveCampaigns() {
  const { campaigns } = useCampaignContext();

  return (
    <section
      className="campaigns-section"
      style={{
        background: "url(/images/active-campaigns.png)",
        backgroundSize: "90% auto",
        backgroundPosition: "center 0",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="campaigns-text">
        <h1>JOIN HANDS FOR A CLEANER WORLD, START YOUR OWN CLEAN CAMPAIGN</h1>
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
          Once your campaign is live, share it with your network and through our
          platform to reach a wider audience. Encourage others to spread the
          word, inviting friends, family, coworkers, and community members to
          participate.
        </p>
        <p>
          Together, we can create a cleaner, healthier, and more beautiful
          world, one campaign at a time.
        </p>
        <div className="all-campaigns">
          <h3>Active Campaigns</h3>
          {campaigns.map((x) => (
            <CampaignCard key={x._id} {...x} />
          ))}
        </div>
        {campaigns.length === 0 && (
          <div className="no-campaigns">
            <img src="./images/active-campaigns-2.jpg" alt="Hands" />
            <p>
              No availbale campaigns at the moment!{" "}
              <Link to="/createCampaign">Create one...</Link>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
