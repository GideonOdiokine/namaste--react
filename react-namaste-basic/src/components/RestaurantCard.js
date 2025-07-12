

const RestaurantCard = ({ name }) => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_500,ar_4:3/v1/img/recipes/40/49/7/iUlxb54sSWaD9Zp44kfP_FGgWFV4mSVq8aISp1eQG_baked%2520wings%2520(1%2520of%25204).jpg"
        alt="res-image"
      />
      <h3>{name}</h3>
      <h4>Uyo, North Nigeria, Calabar.</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

export default RestaurantCard
