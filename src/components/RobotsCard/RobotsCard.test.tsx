import robotsMocks from "../../mocks/robotsMocks";
import renderWithProviders from "../../testUtils/renderWithProviders";
import RobotsCard from "./RobotsCard";
import { screen } from "@testing-library/react";

describe("Given a UserCard component", () => {
  describe("When it receives 'Wall-A'", () => {
    test("Then it should create a 'Wall-A' heading");
    const user = robotsMocks[0].name;
    renderWithProviders(<RobotsCard robot={robotsMocks[0]} />, robotsMocks);

    const heading = screen.getByRole("heading", { name: user });

    expect(heading).toBeInTheDocument();
  });
});
