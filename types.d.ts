export type InitialStateTypes = {
  fill: "X" | "O";
  startGame: boolean;
  winner: "X" | "O" | "tie" | null;
  oArray: number[];
  xArray: number[];
};

export type GeneralContextType = InitialStateTypes & {
  choosingCube: (i: number) => void;
  startGameHandler: () => void;
};

type ActionWithoutPayload = {
  type: "START_GAME" | "CHANGE_TURN" | "USER_WON" | "TIE";
};
type ActionWithPayload = {
  type: string;
  payload: number;
};

export type ReducerActionTypes = ActionWithPayload | ActionWithoutPayload;

export type WinningPatternType = [number, number, number][];
