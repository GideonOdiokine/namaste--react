// import { useDispatch } from "react-redux";
// import { addItem } from "../utils/cartSlice";

import { useDispatch } from "react-redux";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../../public/Common/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  //   const handleAddItem = (item) => {
  //     // Dispatch an action
  //     dispatch(addItem(item));
  //   };

  return (
    <div>
      {items.map((item) => (
        <div className="menu-item" key={item?.id} data-testid="foodItems">
          <div className="menu-item-details">
            <h3 className="item-title">{item?.name}</h3>
            <p className="item-cost">
              {item?.price > 0
                ? new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(item?.price / 100)
                : " "}
            </p>
            <p className="item-desc">{item?.description}</p>
          </div>
          <div className="menu-img-wrapper">
            {item?.imageId && (
              <img
                className="menu-item-img"
                src={ITEM_IMG_CDN_URL + item?.imageId}
                alt={item?.name}
              />
            )}
            <button
              className="add-btn"
              onClick={() => {
                dispatch(addItem(item));
              }}
            >
              {" "}
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
