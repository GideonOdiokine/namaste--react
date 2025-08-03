import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

describe("Header Component Test Cases", () => {
  it("should load Header Component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login ●" });
    //   const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
  });

  it("should should render Header Component with a Cart Items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - (0 items)");
    expect(cartItems).toBeInTheDocument();
  });

  it("should should render Header Component with a Cart Item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
  });

  it("should change login button to logout onclick", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login ●" });
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout ●" });

    expect(logoutButton).toBeInTheDocument();
  });
});
