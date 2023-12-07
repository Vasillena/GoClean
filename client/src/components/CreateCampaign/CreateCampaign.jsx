// import { useCampaignContext } from "../../contexts/CampaignContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { campaignServiceFactory } from "../../services/campaignService";
import { useForm } from "../../hooks/useForm";
import { validateInputs } from "../../utils/validateInputs";

export default function CreateCampaign() {
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();
  const campaignService = campaignServiceFactory();

  const onCreateCampaignSubmit = async (data) => {
    try {
      const newCampaign = await campaignService.create(data);

      setCampaigns((state) => [...state, newCampaign]);

      navigate("/activeCampaigns");
    } catch (error) {
      console.log(error);
    }
  };

  const { values, changeHandler, onSubmit, submitting, formError, errors } =
    useForm(
      {
        username: "",
        location: "",
        date: "",
        time: "",
        locationUrl: "",
        description: "",
      },
      onCreateCampaignSubmit,
      validateInputs
    );

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
        <h1>Start Your Own Clean Campaign</h1>
      </div>
      {formError && <p className="form-error">{formError}</p>}
      <div className="create-form">
        <form id="create" onSubmit={(e) => onSubmit(e, validateInputs)}>
          <div className="container">
            <div className="form-elements">
              <label htmlFor="username" />
              <input
                value={values.username}
                onChange={changeHandler}
                type="text"
                id="username"
                name="username"
                placeholder="Name"
                required
              />
              {errors.username && (
                <p className="form-error">{errors.username}</p>
              )}
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
                required
              />
              {errors.location && (
                <p className="form-error">{errors.location}</p>
              )}
            </div>
            <div className="form-elements">
              <label htmlFor="date" />
              <input
                value={values.date}
                onChange={changeHandler}
                type="text"
                id="date"
                name="date"
                placeholder="Date (01.01.2000)"
                required
              />
              {errors.date && <p className="form-error">{errors.date}</p>}
            </div>
            <div className="form-elements">
              <label htmlFor="time" />
              <input
                value={values.time}
                onChange={changeHandler}
                type="text"
                id="time"
                name="time"
                placeholder="Time (12:00)"
                required
              />
              {errors.time && <p className="form-error">{errors.time}</p>}
            </div>
            <div className="form-elements">
              <label htmlFor="locationUrl" />
              <input
                value={values.locationUrl}
                onChange={changeHandler}
                type="text"
                id="locationUrl"
                name="locationUrl"
                placeholder="Location image URL (http:\\ / https:\\"
                required
              />
              {errors.locationUrl && (
                <p className="form-error">{errors.locationUrl}</p>
              )}
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
