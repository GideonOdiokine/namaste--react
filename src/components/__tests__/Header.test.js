import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { useOnlineStatus } from "../../hooks/useOnlineStatus";
import { login } from "../../utils/userSlice";
import { act } from "react";

jest.mock("../../hooks/useOnlineStatus", () => ({
  useOnlineStatus: jest.fn(),
}));

beforeEach(() => {
  useOnlineStatus.mockReturnValue({ isOnline: true });
});

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

  it("should change logout button to login onclick", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const logoutButton = screen.getByRole("button", { name: "Logout ●" });
    fireEvent.click(logoutButton);

    const loginButton = screen.getByRole("button", { name: "Login ●" });

    expect(loginButton).toBeInTheDocument();
  });

  it("should show red dot when offline and green dot when online", async () => {
    // First render as offline
    useOnlineStatus.mockReturnValue({ isOnline: false });
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
    });

    // Offline => dot should have class "login-btn-red"
    expect(screen.getByText("●")).toHaveClass("login-btn-red");

    // Switch to online
    useOnlineStatus.mockReturnValue({ isOnline: true });
    // Dispatch login to show logout button
    appStore.dispatch(login(true));

    // Re-render
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // Online => dot should have class "login-btn-green"
    expect(screen.getAllByText("●")[1]).toHaveClass("login-btn-green");
  });
});
