import Bodyi from "../Bodyi";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the Body Component with Search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Bodyi />
      </BrowserRouter>
    );
  });



  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "mcDonald's" } });

  fireEvent.click(searchBtn);

  // Screen should load 1 res card
  const card = screen.getByTestId("resCard");

  expect(card).toBeInTheDocument();
});
