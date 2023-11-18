import { screen } from "@testing-library/react";

import renderWithProviders from "../../testUtils/renderWithProviders";
import robotsMock from "../../mocks/robotsMocks";
import RobotsList from "./RobotsList";

describe("Given a RobotsList component", () => {
  describe("When it receives an array of movies with 'Wall-A' and 'Isditron'", () => {
    test("Then it should create 2 listitems", () => {
      const expectedListItems = 2;
      const robots = robotsMock;

      renderWithProviders(<RobotsList />, robots);
      const listItems = screen.getAllByRole("listitem").length;

      expect(listItems).toBe(expectedListItems);
    });
  });
});
