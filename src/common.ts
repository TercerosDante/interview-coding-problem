export enum Instruction {
  Left = 'L',
  Right = 'R',
  Move = 'M',
}

export const LetterToInstruction = {
  'L': Instruction.Left,
  'R': Instruction.Right,
  'M': Instruction.Move
}
