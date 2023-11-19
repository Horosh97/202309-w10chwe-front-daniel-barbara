import { RobotStructure } from "../../store/features/robots/types";

interface RobotsCardProps {
  robot: RobotStructure;
}

const RobotsCard = ({
  robot: { name, image, resistence, speed },
}: RobotsCardProps): React.ReactElement => {
  return (
    <article>
      <div>
        <img src={image} alt={`robot ${name}`} />
      </div>
      <h3>{name}</h3>
      <span>Resistence: {resistence}</span>
      <span>Speed: {speed}</span>
    </article>
  );
};

export default RobotsCard;
