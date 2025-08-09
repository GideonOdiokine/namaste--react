import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react";
import appStore from "../../utils/appStore";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const textHeader = screen.getByText("Recommended");
  expect(textHeader).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(26);

  const addBtns = screen.getAllByRole("button", { name: "ADD +" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[2]);

  expect(screen.getByText("Cart - (3 items)")).toBeInTheDocument();

  // 26 from the restaurant Menu  + the 3 I just added to cart = 29
  expect(screen.getAllByTestId("foodItems").length).toBe(29);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(26);

  expect(
    screen.getByText("Cart is empty. Add Items to the cart!")
  ).toBeInTheDocument();
});
