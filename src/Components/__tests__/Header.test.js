import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should load Header component with a login button", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );
//incase of multiple button we can use below syntax
 const loginButton = screen.getByRole("button", { name: "Login"});
 //const loginButton = screen.getByRole("button");
 //const loginButton = screen.getByText("Login")
  expect(loginButton).toBeInTheDocument();
});

it("Should load Header component with a CART button", () => {
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
      </BrowserRouter>
    );
  
   const cartItems = screen.getByText("Cart: (0 items)");
    expect(cartItems).toBeInTheDocument();
  });

  
it("Should load Header component with a CART keyword", () => {
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
      </BrowserRouter>
    );
  
    //use  rejex /text/ to be flexible, this will identify the keyword written between it.
   const identfiyCart = screen.getByText(/Cart/);
    expect(identfiyCart).toBeInTheDocument();
  });
  
  it("Should change Login to Logout button on click ", () => {
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
      </BrowserRouter>
    );
  
  
   const loginButton = screen.getByRole("button", {name: "Login"});
   fireEvent.click(loginButton);
   const logoutButton = screen.getByRole("button", {name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
  });
  
