import { useCallback } from "react";
import { RobotStructure } from "../store/features/robots/types";

const apiUrl = import.meta.env.VITE_API_URL;

const useRobotsApi = () => {
  const getRobots = useCallback(async () => {
    const response = await fetch(apiUrl);
    const robots = (await response.json()) as RobotStructure[];

    return robots;
  }, []);

  return {
    getRobots,
  };
};

export default useRobotsApi;
