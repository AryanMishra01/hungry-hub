import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_MENU from "../mocks/mockRestMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_MENU),
  })
);
it("Should load Menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
          <Header />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordionHeader = screen.getByText("Quick Snacks (8)");
  fireEvent.click(accordionHeader);
  const foodItemsList = screen.getAllByTestId("foodItems");
  expect(foodItemsList.length).toBe(8);
  const addBtns = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart: (1 items)")).toBeInTheDocument;
  expect(screen.getAllByTestId("foodItems").length).toBe(9);
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(8);
  expect(screen.getByText("Cart is empty. Add Items !")).toBeInTheDocument();
});
