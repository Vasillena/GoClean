import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCampaignContext } from "../../contexts/CampaignContext";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { campaignServiceFactory } from "../../services/campaignService";

export default function EditCampaign() {
  const { onCampaignEditSubmit } = useCampaignContext();
  const { campaignId } = useParams();
  const campaignService = useService(campaignServiceFactory);
  const { values, changeHandler, onSubmit, changeValues } = useForm(
    {
      _id: "",
      username: "",
      location: "",
      date: "",
      time: "",
      locationUrl: "",
      description: "",
    },
    onCampaignEditSubmit
  );
  const [error, setError] = useState(null);

  useEffect(() => {
    campaignService
      .getOne(campaignId)
      .then((result) => {
        changeValues(result);
      })
      .catch((error) => {
        setError("Failed to fetch campaign details. Please try again later.");
      });
  }, [campaignId]);

  return (
    <section
      className="create-campaign-section"
      style={{
        background: "url(/images/create-campaign-2.svg)",
        backgroundSize: "100% auto",
        backgroundPosition: "center 20%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="create-title">
        <h1>Edit your Campaign</h1>
      </div>
      <div className="create-form">
        {error ? (
          <div className="error-message">
            <p>{error}</p>
          </div>
        ) : (
          <form id="create" method="post" onSubmit={onSubmit}>
            <div className="container">
              <div className="form-elements">
                <label htmlFor="username" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Name"
                  value={values.username}
                  onChange={changeHandler}
                  required
                />
              </div>
              <div className="form-elements">
                <label htmlFor="location" />
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Location"
                  value={values.location}
                  onChange={changeHandler}
                  required
                />
              </div>
              <div className="form-elements">
                <label htmlFor="date" />
                <input
                  type="text"
                  id="date"
                  name="date"
                  placeholder="Date"
                  value={values.date}
                  onChange={changeHandler}
                  required
                />
              </div>
              <div className="form-elements">
                <label htmlFor="time" />
                <input
                  type="text"
                  id="time"
                  name="time"
                  placeholder="Time"
                  value={values.time}
                  onChange={changeHandler}
                  required
                />
              </div>
              <div className="form-elements">
                <label htmlFor="locationUrl" />
                <input
                  type="text"
                  id="locationUrl"
                  name="locationUrl"
                  placeholder="Location image URL"
                  value={values.locationUrl}
                  onChange={changeHandler}
                  required
                />
              </div>
              <div className="form-elements">
                <label htmlFor="description" />
                <textarea
                  id="description"
                  name="description"
                  cols={50}
                  rows={2}
                  placeholder="Tell us more about your campaign"
                  value={values.description}
                  onChange={changeHandler}
                  required
                />
              </div>
              <div className="form-elements">
                <input
                  type="submit"
                  className="submit-button"
                  defaultValue="SEND"
                />
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
