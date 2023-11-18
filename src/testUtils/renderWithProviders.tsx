import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../styles/mainTheme";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { RobotStructure } from "../store/features/robots/types";
import { robotsReducer } from "../store/features/robots/robotsSlice";

const renderWithProviders = (
  children: React.ReactElement,
  mocksList: RobotStructure[],
) => {
  const mockStore = configureStore({
    reducer: {
      robotsState: robotsReducer,
    },
    preloadedState: { robotsState: { robots: mocksList } },
  });

  render(
    <BrowserRouter>
      <Provider store={mockStore}>
        <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
      </Provider>
    </BrowserRouter>,
  );
};
export default renderWithProviders;
