import { Plateau } from "./Plateau";
import { Rover } from "./Rover";
import { Instruction } from "./common";

export class MissionControl {
  static execute(rover: Rover, instructions: Instruction[], plateau: Plateau): Rover {
    const newRover = new Rover(rover.x, rover.y, rover.orientation);

    instructions.forEach((instruction) => {
      switch (instruction) {
        case Instruction.Left:
          newRover.turnLeft();
          break;
        case Instruction.Right:
          newRover.turnRight();
          break;
        case Instruction.Move:
          newRover.moveForward(plateau);
          break;
        default:
          throw new Error(`Invalid instruction: ${instruction}`);
      }
    });

    return newRover;
  }
}
