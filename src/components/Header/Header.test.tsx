import { screen } from "@testing-library/react";
import Header from "./Header";
import renderWithProviders from "../../testUtils/renderWithProviders";
import robotsMock from "../../mocks/robotsMocks";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("It should create a 'ROBOTS' heading", () => {
      const expectedHeading = "ROBOTS";
      renderWithProviders(<Header />, robotsMock);

      const Heading = screen.getByRole("heading", { name: expectedHeading });

      expect(Heading).toBeInTheDocument();
    });
  });
});
