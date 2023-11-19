import { useNavigate } from "react-router-dom";
import RobotForm from "../../components/RobotForm/RobotForm";
import AddRobotPageStyled from "./AddRobotPageStyled";
import { useDispatch } from "react-redux";
import {
  RobotStructure,
  RobotStructureWithoutId,
} from "../../store/features/robots/types";
import { addRobotActionCreator } from "../../store/features/robots/robotsSlice";
import useRobotsApi from "../../hooks/useRobotsApi";

const AddRobotPage = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addNewRobot } = useRobotsApi();

  const addRobotOnSubmit = async (newRobot: RobotStructureWithoutId) => {
    try {
      const returnedRobotFromApi: RobotStructure = await addNewRobot(newRobot);
      dispatch(addRobotActionCreator(returnedRobotFromApi));
      navigate("/home");
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  return (
    <AddRobotPageStyled>
      <h1 className="main-heading">Create a new robot:</h1>
      <RobotForm actionOnSubmit={addRobotOnSubmit} />
    </AddRobotPageStyled>
  );
};
export default AddRobotPage;
