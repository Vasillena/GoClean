import React from "react";
import { useForm } from "../../hooks/useForm";

export default function CreateCampaign({ onCreateCampaignSubmit }) {
  const { values, changeHandler, onSubmit } = useForm(
    {
      username: "",
      location: "",
      date: "",
      time: "",
      locationUrl: "",
      description: "",
    },
    onCreateCampaignSubmit
  );

  return (
    <section
      className="create-campaign-section"
      style={{
        background: "url(/images/create-campaign.jpg)",
        backgroundSize: "90% auto",
        backgroundPosition: "center 0",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="create-title">
        <h1>Join Hands for a Cleaner World: Start Your Own Clean Campaign</h1>
      </div>
      <div className="create-form">
        <form id="create" onSubmit={onSubmit}>
          <div className="container">
            <div className="form-elements">
              <label htmlFor="name" />
              <input
                value={values.username}
                onChange={changeHandler}
                type="text"
                id="username"
                name="username"
                placeholder="Name"
              />
            </div>
            <div className="form-elements">
              <label htmlFor="location" />
              <input
                value={values.location}
                onChange={changeHandler}
                type="text"
                id="location"
                name="location"
                placeholder="Location"
              />
            </div>
            <div className="form-elements">
              <label htmlFor="date" />
              <input
                value={values.date}
                onChange={changeHandler}
                type="text"
                id="date"
                name="date"
                placeholder="Date"
              />
            </div>
            <div className="form-elements">
              <label htmlFor="time" />
              <input
                value={values.time}
                onChange={changeHandler}
                type="text"
                id="time"
                name="time"
                placeholder="Time"
              />
            </div>
            <div className="form-elements">
              <label htmlFor="locationUrl" />
              <input
                value={values.locationUrl}
                onChange={changeHandler}
                type="text"
                id="locationUrl"
                name="locationUrl"
                placeholder="Location image URL"
              />
            </div>
            <div className="form-elements">
              <label htmlFor="description" />
              <textarea
                value={values.description}
                onChange={changeHandler}
                id="description"
                name="description"
                cols={50}
                rows={2}
                placeholder="Tell us more about your campaign"
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
      </div>
    </section>
  );
}
