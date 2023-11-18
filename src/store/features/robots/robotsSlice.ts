import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RobotStructure, RobotsStateStructure } from "./types";

const initialRobotsState: RobotsStateStructure = {
  robots: [],
};

const robotsSlice = createSlice({
  name: "robots",
  initialState: initialRobotsState,
  reducers: {
    loadRobots: (
      currentState: RobotsStateStructure,
      action: PayloadAction<RobotStructure[]>,
    ): RobotsStateStructure => ({ ...currentState, robots: action.payload }),
  },
});
export const { loadRobots: loadRobotsActionCreator } = robotsSlice.actions;

export const robotsReducer = robotsSlice.reducer;
