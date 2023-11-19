import { useCallback } from "react";
import {
  RobotStructure,
  RobotStructureWithoutId,
} from "../store/features/robots/types";

const apiUrl = import.meta.env.VITE_API_URL;

const useRobotsApi = () => {
  const getRobots = useCallback(async () => {
    const response = await fetch(apiUrl);
    const robots = (await response.json()) as { robots: RobotStructure[] };

    return robots.robots;
  }, []);
  const addNewRobot = async (
    robot: RobotStructureWithoutId,
  ): Promise<RobotStructure> => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(robot),
      });
      if (!response.ok) {
        throw new Error();
      }
      const returnedRobotFromApi = (await response.json()) as RobotStructure;
      return returnedRobotFromApi;
    } catch (error) {
      console.log((error as Error).message);
      const returnedRobotFromApi = {} as RobotStructure;
      return returnedRobotFromApi;
    }
  };

  return {
    getRobots,
    addNewRobot,
  };
};

export default useRobotsApi;
