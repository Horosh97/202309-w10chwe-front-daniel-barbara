import { RobotStructure } from "../../store/features/robots/types";
import RobotsCardStyled from "./RobotsCarstyled";

interface RobotsCardProps {
  robot: RobotStructure;
}

const RobotsCard = ({
  robot: { name, image, resistence, speed },
}: RobotsCardProps): React.ReactElement => {
  return (
    <RobotsCardStyled>
      <div className="card">
        <img className="card__image" src={image} alt={`robot ${name}`} />
      </div>
      <h3 className="card__name">{name}</h3>
      <span className="card__resistance">Resistence: {resistence}</span>
      <span className="card__speed">Speed: {speed}</span>
    </RobotsCardStyled>
  );
};

export default RobotsCard;
