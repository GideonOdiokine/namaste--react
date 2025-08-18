import React, { useEffect } from "react";
import { restaurantList } from "../utils/mockData";
import RestaurantCard, { withPromptedLabel } from "./RestaurantCard";
import { FOODFIRE_API_URL } from "../../public/common/constants";
import { Link } from "react-router-dom";

const searchDataFunc = (searchText, restaurants) => {
  return restaurants.filter((res) =>
    res.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Body = () => {
  const [filteredList, setFilteredList] = React.useState(restaurantList);
  const [searchText, setSearchText] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const RestaurantCardPrompted = withPromptedLabel(RestaurantCard);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FOODFIRE_API_URL);
    const res = await data.json();
    // setFilteredList(res.data);
  };

  const searchData = (searchTerm, restaurants) => {
    if (searchTerm !== "") {
      let sortedData = searchDataFunc(searchTerm, restaurants);
      setFilteredList(sortedData);

      if (sortedData.length === 0) {
        setErrorMessage("No item found");
      }
    } else {
      setErrorMessage("");
      setFilteredList(restaurantList);
    }
  };

  useEffect(() => {
    if (searchText === "") {
      setFilteredList(restaurantList);
    }
  }, [searchText]);


  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, filteredList);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            setFilteredList(
              filteredList.filter((res) => res.data.avgRating > 4)
            );
          }}
          className="search-btn"
          style={{ marginLeft: "10px" }}
        >
          Top Rated restaurantList
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      <div className="restaurant-list">
        {/* Restaurant card */}
        {filteredList.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.info?.id}
            key={restaurant.data.id}
          >
            {/* if the restaurant is promoted then add a promoted label to it*/}
            {restaurant.data.promoted ? (
              <RestaurantCardPrompted {...restaurant.data}/>
            ) : (
              <RestaurantCard {...restaurant.data} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
