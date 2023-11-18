export interface RobotStructureWithoutId {
  name: string;
  image: string;
  speed: string;
  resistence: string;
}

export interface RobotStructure extends RobotStructureWithoutId {
  id: string;
}
export interface RobotsStateStructure {
  robots: RobotStructure[];
}
