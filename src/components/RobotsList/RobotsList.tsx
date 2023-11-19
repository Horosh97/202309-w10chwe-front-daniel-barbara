import { useAppSelector } from "../../store/hooks";
import RobotCard from "../RobotsCard/RobotCard";
import RobotsListStyled from "./RobotsListStyled";

const RobotsList = (): React.ReactElement => {
  const robots = useAppSelector((state) => {
    return state.robotsState.robots;
  });

  return (
    <RobotsListStyled>
      {robots.map((robot) => (
        <li key={robot._id}>
          <RobotCard robot={robot} />
        </li>
      ))}
    </RobotsListStyled>
  );
};
export default RobotsList;
