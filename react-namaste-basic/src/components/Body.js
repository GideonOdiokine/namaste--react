import { restaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      {/* <div className="search">
        <input type="text" placeholder="search" />
      </div> */}

      <div className="filter">
        <button onClick={() => {
            console.log('btn clicked')
        }} className="filter-btn">
          Top Rated restaurantList
        </button>
      </div>

      <div className="restaurant-list">
        {/* Restaurant card */}
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
