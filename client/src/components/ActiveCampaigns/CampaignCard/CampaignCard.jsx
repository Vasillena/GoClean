import { Link } from "react-router-dom";

export default function CampaignCard({
  _id,
  date,
  time,
  location,
  locationUrl,
}) {
  return (
    <Link to={`/activeCampaigns/${_id}`}>
      {/* <div className="card-container">
        <div className="img-container">
          <img src={locationUrl} alt="Location img" />
        </div>
        <div className="content-container">
          <div className="card-location">
            <p>{location}</p>
          </div>
          <div className="card-date">
            <p>{date}</p>
          </div>
          <div className="card-time">
            <p>{time}</p>
          </div>
        </div>
      </div> */}
            <div className="card-container">
           <div className="img-container">
          <img src={locationUrl} alt="Location img" />
        </div>
                <div className="content-container">
          <div className="card-location">
            <p>{location}</p>
          </div>
          <div className="card-date">
            <p>{date}</p>
          </div>
          {/* <div className="card-time">
            <p>{time}</p>
          </div> */}
        </div>
      </div>
    </Link>
  );
}
