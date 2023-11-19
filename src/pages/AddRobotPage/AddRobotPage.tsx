import RobotForm from "../../components/RobotForm/RobotForm";

const AddRobotPage = (): React.ReactElement => {
  const addRobotOnSubmit = () => {};
  return (
    <div>
      <RobotForm actionOnSubmit={addRobotOnSubmit} />
    </div>
  );
};
export default AddRobotPage;
