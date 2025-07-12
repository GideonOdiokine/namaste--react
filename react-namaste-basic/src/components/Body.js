import RestaurantCard from './RestaurantCard';

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="search" />
      </div>
      <div className="res-container">
        {/* Restaurant card */}
        {["Stew", "Rice", "cake", "pancake"].map((res) => (
          <RestaurantCard key={res} name={res} />
        ))}
        {/* <RestaurantCard name="Rice food" />
        <RestaurantCard name="Stew" />
        <RestaurantCard name="Yam" />
        <RestaurantCard name="Plantain" />
        <RestaurantCard name="Cake" />
        <RestaurantCard name="Pawa" />
        <RestaurantCard name="Avanb" /> */}
      </div>
    </div>
  );
};

export default Body
