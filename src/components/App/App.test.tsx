import { screen } from "@testing-library/react";
import App from "./App";
import renderWithProviders from "../../testUtils/renderWithProviders";
import robotsMock from "../../mocks/robotsMocks";

describe("Given a App component", () => {
  describe("When it renders", () => {
    test("It should create a Header component with a heading 'ROBOTS'", () => {
      const expectedHeading = "ROBOTS";
      renderWithProviders(<App />, robotsMock);

      const Heading = screen.getByRole("heading", { name: expectedHeading });

      expect(Heading).toBeInTheDocument();
    });
  });
});
