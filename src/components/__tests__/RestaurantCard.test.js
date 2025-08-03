import { render } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";

it("should render RestaurantCard Component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
});
