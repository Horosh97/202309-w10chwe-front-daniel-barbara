import { useEffect } from "react";
import useRobotsApi from "../hooks/useRobotsApi";
import { useAppDispatch } from "../store/hooks";
import { loadRobotsActionCreator } from "../store/features/robots/robotsSlice";
import HomePageStyled from "./HomePageStyled";
import RobotsList from "../components/RobotsList/RobotsList";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getRobots } = useRobotsApi();

  useEffect(() => {
    (async () => {
      const actualRobots = await getRobots();
      dispatch(loadRobotsActionCreator(actualRobots));
    })();
  }, [dispatch, getRobots]);

  return (
    <HomePageStyled>
      <main>
        <h1 className="main-heading">Robots List:</h1>
        <RobotsList />
      </main>
    </HomePageStyled>
  );
};
export default HomePage;
