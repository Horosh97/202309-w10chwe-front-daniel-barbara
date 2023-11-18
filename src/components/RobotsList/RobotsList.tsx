import { useAppSelector } from "../../store/hooks";
import RobotsListStyled from "./RobotsListStyled";

const RobotsList = (): React.ReactElement => {
  const robots = useAppSelector((state) => {
    return state.robotsState.robots;
  });

  return (
    <RobotsListStyled>
      {robots.map(() => (
        <li>
          <div></div>
        </li>
      ))}
    </RobotsListStyled>
  );
};
export default RobotsList;
