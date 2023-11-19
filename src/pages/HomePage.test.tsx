import robotsMock from "../mocks/robotsMocks";
import renderWithProviders from "../testUtils/renderWithProviders";
import HomePage from "./HomePage";
import { screen } from "@testing-library/react";

describe("Given a HomePage page", () => {
  describe("When it is called", () => {
    test("Then it should show a heading with the text Robots", () => {
      const expectedText = "Robots";

      renderWithProviders(<HomePage />, robotsMock);

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
