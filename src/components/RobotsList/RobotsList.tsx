import { useAppSelector } from "../../store/hooks";

const RobotsList = (): React.ReactElement => {
  const robots = useAppSelector((state) => {
    return state.robotsState.robots;
  });

  return (
    <div>
      {robots.map(() => (
        <li>
          <div></div>
        </li>
      ))}
    </div>
  );
};
export default RobotsList;
