import robotsMock from "../../mocks/robotsMocks";
import renderWithProviders from "../../testUtils/renderWithProviders";
import { screen } from "@testing-library/react";
import AddRobotPage from "./AddRobotPage";

describe("Given a HomePage page", () => {
  describe("When it is called", () => {
    test("Then it should show a heading with the text Create a new robot:", () => {
      const expectedText = "Create a new robot:";

      renderWithProviders(<AddRobotPage />, robotsMock);

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
