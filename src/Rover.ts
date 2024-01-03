import { Plateau } from "./Plateau";

export class Rover {
  constructor(public x: number, public y: number, public orientation: 'N' | 'S' | 'E' | 'W') {}

  turnLeft(): void {
    switch (this.orientation) {
      case 'N':
        this.orientation = 'W';
        break;
      case 'W':
        this.orientation = 'S';
        break;
      case 'S':
        this.orientation = 'E';
        break;
      case 'E':
        this.orientation = 'N';
        break;
    }
  }

  turnRight(): void {
    switch (this.orientation) {
      case 'N':
        this.orientation = 'E';
        break;
      case 'E':
        this.orientation = 'S';
        break;
      case 'S':
        this.orientation = 'W';
        break;
      case 'W':
        this.orientation = 'N';
        break;
    }
  }

  moveForward(plateau: Plateau): void {
    switch (this.orientation) {
      case 'N':
        this.y = Math.min(this.y + 1, plateau.upperRightY);
        break;
      case 'E':
        this.x = Math.min(this.x + 1, plateau.upperRightX);
        break;
      case 'S':
        this.y = Math.max(this.y - 1, 0);
        break;
      case 'W':
        this.x = Math.max(this.x - 1, 0);
        break;
    }
  }
}
