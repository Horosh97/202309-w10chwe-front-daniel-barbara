import { useAppSelector } from "../../store/hooks";
import RobotsCard from "../RobotsCard/RobotsCard";
import RobotsListStyled from "./RobotsListStyled";

const RobotsList = (): React.ReactElement => {
  const robots = useAppSelector((state) => {
    return state.robotsState.robots;
  });

  return (
    <RobotsListStyled>
      {robots.map((robot) => (
        <li key={robot._id}>
          <RobotsCard robot={robot} />
        </li>
      ))}
    </RobotsListStyled>
  );
};
export default RobotsList;
