import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { campaignServiceFactory } from "../../services/campaignService";
import { validateInputs } from "../../utils/validateInputs";

export default function EditCampaign() {
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();
  const { campaignId } = useParams();
  const campaignService = useService(campaignServiceFactory);

  const onCampaignEditSubmit = async (values) => {
    const result = await campaignService.edit(values._id, values);

    setCampaigns((state) =>
      state.map((x) => (x._id === values._id ? result : x))
    );

    navigate(`/activeCampaigns/${values._id}`);
  };

  const {
    values,
    changeHandler,
    onSubmit,
    changeValues,
    submitting,
    formError,
    errors,
  } = useForm(
    {
      _id: "",
      username: "",
      location: "",
      date: "",
      time: "",
      locationUrl: "",
      description: "",
    },
    onCampaignEditSubmit,
    validateInputs
  );

  useEffect(() => {
    campaignService
      .getOne(campaignId)
      .then((result) => {
        changeValues(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [campaignId]);

  return (
    <section
      className="create-campaign-section"
      style={{
        background: "url(/images/hero-img-2.png)",
        backgroundSize: "100% auto",
        backgroundPosition: "center 0",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="create-title">
        <h1>Edit your Campaign</h1>
      </div>
      {formError && <p className="form-error">{formError}</p>}
      <div className="create-form">
        <form id="create" onSubmit={(e) => onSubmit(e, validateInputs)}>
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
              {errors.username && (
                <p className="form-error">{errors.username}</p>
              )}
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
              {errors.location && (
                <p className="form-error">{errors.location}</p>
              )}
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
              {errors.date && <p className="form-error">{errors.date}</p>}
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
              {errors.time && <p className="form-error">{errors.time}</p>}
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
              {errors.locationUrl && (
                <p className="form-error">{errors.locationUrl}</p>
              )}
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
              {errors.description && (
                <p className="form-error">{errors.description}</p>
              )}
            </div>
            <div className="form-elements">
              <input
                type="submit"
                className="submit-button"
                value={submitting ? "Submitting..." : "SEND"}
                disabled={submitting}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
