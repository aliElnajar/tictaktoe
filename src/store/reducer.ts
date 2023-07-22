import { InitialStateTypes, ReducerActionTypes } from "../../types";

export const initialState: InitialStateTypes = {
  fill: "X",
  xArray: [],
  oArray: [],
  winner: null,
  startGame: false,
};

export const reducerFn = (
  state: InitialStateTypes,
  action: ReducerActionTypes
): InitialStateTypes => {
  switch (action.type) {
    case "CHOOSED_CUBE_O":
      return { ...state, oArray: [...state.oArray, action.payload] };
    case "CHOOSED_CUBE_X":
      return { ...state, xArray: [...state.xArray, action.payload] };
    case "CHANGE_TURN":
      return { ...state, fill: state.fill === "X" ? "O" : "X" };
    case "USER_WON":
      return { ...state, winner: state.fill };
    case "TIE":
      return { ...state, winner: "tie" };
    case "START_GAME":
      return { ...initialState, startGame: true };
    default:
      return state;
  }
};
