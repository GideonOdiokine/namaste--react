import { IMG_CDN_URL } from "../../public/common/constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines?.join(", ")}</h5>
      <h5>{areaName}</h5>
      <span>
        <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRatingString === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4>
        <h4>•</h4>
        <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
        <h4>•</h4>
        <h4>{costForTwo ?? "₹200 for two"}</h4>
      </span>
    </div>
  );
};

// Higher Order Component
// Input => RestaurantCard => RestaurantCardPrompted
export const withPromptedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label
          style={{
            position: "absolute",
            background: "black",
            color: "white",
            margin: "8px",
            padding: "8px",
            borderRadius: "12px",
          }}
        >
          Prompted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
