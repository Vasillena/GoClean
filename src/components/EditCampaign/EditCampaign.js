import React from "react";

export default function EditCampaign() {
  return (
    <section className="create-campaign-section">
      <div className="create-title">
        <h1>Edit your Campaign</h1>
      </div>
      <div className="create-form">
        <form id="create">
          <div className="container">
            <div className="form-elements">
              <label htmlFor="name" />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Name"
              />
            </div>
            <div className="form-elements">
              <label htmlFor="location" />
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Location"
              />
            </div>
            <div className="form-elements">
              <label htmlFor="date" />
              <input type="text" id="date" name="date" placeholder="Date" />
            </div>
            <div className="form-elements">
              <label htmlFor="time" />
              <input type="text" id="time" name="time" placeholder="Time" />
            </div>
            <div className="form-elements">
              <label htmlFor="locationUrl" />
              <input
                type="text"
                id="locationUrl"
                name="locationUrl"
                placeholder="Location image URL"
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
                defaultValue={""}
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
