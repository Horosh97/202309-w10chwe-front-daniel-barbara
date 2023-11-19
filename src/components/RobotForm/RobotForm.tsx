import { useState } from "react";
import { RobotStructureWithoutId } from "../../store/features/robots/types";

interface RobotFormProps {
  actionOnSubmit: (robot: RobotStructureWithoutId) => void;
}

const RobotForm = ({ actionOnSubmit }: RobotFormProps): React.ReactElement => {
  const initialNewRobot: RobotStructureWithoutId = {
    name: "",
    image: "",
    resistence: "",
    speed: "",
  };

  const [newRobot, setNewRobot] = useState(initialNewRobot);

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewRobot((newRobot: RobotStructureWithoutId) => ({
      ...newRobot,
      [event.target.id]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    actionOnSubmit(newRobot);
  };

  const { name, image, resistence, speed } = newRobot;

  return (
    <form className="robot-form" autoComplete="off" onSubmit={onFormSubmit}>
      <div className="robot-form__block">
        <label className="robot-form__label" htmlFor="name">
          Robot Name:
        </label>
        <input
          id="name"
          className="robot-form__input"
          required
          type="text"
          value={name}
          onChange={onChangeData}
        />
      </div>
      <div className="robot-form__block">
        <label className="robot-form__label" htmlFor="image">
          Image URL:
        </label>
        <input
          id="image"
          className="robot-form__input"
          required
          type="text"
          value={image}
          onChange={onChangeData}
        />
      </div>
      <div className="robot-form__block">
        <label className="robot-form__label" htmlFor="speed">
          Robot speed (From 0 to 10):
        </label>
        <input
          id="speed"
          className="robot-form__input"
          required
          type="text"
          value={speed}
          onChange={onChangeData}
        />
      </div>
      <div className="robot-form__block">
        <label className="robot-form__label" htmlFor="resistence">
          Robot resistence (From 0 to 10):
        </label>
        <input
          id="resistence"
          className="robot-form__input"
          required
          type="text"
          value={resistence}
          onChange={onChangeData}
        />
      </div>
      <button className="robot-form__button" type="submit">
        Create Robot
      </button>
    </form>
  );
};
export default RobotForm;
