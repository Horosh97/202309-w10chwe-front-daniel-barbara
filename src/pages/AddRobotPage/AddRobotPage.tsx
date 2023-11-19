import RobotForm from "../../components/RobotForm/RobotForm";
import AddRobotPageStyled from "./AddRobotPageStyled";

const AddRobotPage = (): React.ReactElement => {
  const addRobotOnSubmit = () => {};
  return (
    <AddRobotPageStyled>
      <h1 className="main-heading">Create a new robot:</h1>
      <RobotForm actionOnSubmit={addRobotOnSubmit} />
    </AddRobotPageStyled>
  );
};
export default AddRobotPage;
