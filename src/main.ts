import { MissionControl } from "./MissionControl";
import { Plateau } from "./Plateau";
import { Rover } from "./Rover";
import { LetterToInstruction } from "./common";
import { readFromTerminal } from "./readFromTerminal";

const SEPARATOR = '';

(async function() {
  try {
    const plateauCoordinates = await readFromTerminal("Enter the plateau's upper right X coordinates (X, Y): ");
    const [plateauUpperRightX, plateauUpperRightY] = plateauCoordinates.split(SEPARATOR);
    const plateau = new Plateau(parseInt(plateauUpperRightX), parseInt(plateauUpperRightY));
    while (true) {
      const roverPosition = await readFromTerminal("Enter the rover's initial position (X, Y, C-POINT = 'N' | 'S' | 'E' | 'W'): ");
      const [roverPositionX, roverPositionY, cPoint] = roverPosition.split(SEPARATOR);
      const rover = new Rover(parseInt(roverPositionX), parseInt(roverPositionY), (cPoint as 'N' | 'S' | 'E' | 'W'));
      const rawInstructions = await readFromTerminal("Enter the set of instructions ('L' | 'M' | 'R'): ");
      const instructions = rawInstructions.split(SEPARATOR).map(letter => LetterToInstruction[letter as 'L' | 'M' | 'R']);
      const result = MissionControl.execute(rover, instructions, plateau);
      console.log('-------Result-------');
      console.log(result.x + SEPARATOR + result.y + SEPARATOR + result.orientation);
      console.log('--------------------');
    }
  } catch (error) {
    console.log('An error has occurred, verify that the input data is correct');
  }
})();
