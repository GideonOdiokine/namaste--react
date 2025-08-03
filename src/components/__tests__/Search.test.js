import Bodyi from "../Bodyi";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from 'react-router-dom';

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
});
