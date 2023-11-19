import { RobotStructure } from "../../store/features/robots/types";
import RobotCardStyled from "./RobotCarstyled";

interface RobotCardProps {
  robot: RobotStructure;
}

const RobotCard = ({
  robot: { name, image, resistence, speed },
}: RobotCardProps): React.ReactElement => {
  return (
    <RobotCardStyled>
      <div className="card">
        <img className="card__image" src={image} alt={`robot ${name}`} />
      </div>
      <h3 className="card__name">{name}</h3>
      <span className="card__resistance">Resistence: {resistence}</span>
      <span className="card__speed">Speed: {speed}</span>
    </RobotCardStyled>
  );
};

export default RobotCard;
