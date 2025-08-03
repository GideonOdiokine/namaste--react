import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromptedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard {...MOCK_DATA.info} />);

  const name = screen.getByText("McDonald's");
  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted Label", () => {
     // Home Work - test HOC : withPromtedLabel()
  const RestaurantCardWithPrompt = withPromptedLabel(RestaurantCard);

  render(<RestaurantCardWithPrompt {...MOCK_DATA.info} />);

  // Check for the "Prompted" label
  const label = screen.getByText("Prompted");
  expect(label).toBeInTheDocument();

  // Also check the restaurant name is still rendered
  const name = screen.getByText("McDonald's");
  expect(name).toBeInTheDocument();
});
