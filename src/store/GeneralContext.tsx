import { createContext, useContext, useEffect, useReducer } from "react";
import { GeneralContextType, WinningPatternType } from "../../types";
import { reducerFn, initialState } from "./reducer";
const GeneralContext = createContext<GeneralContextType>(
  {} as GeneralContextType
);

const winningPattern: WinningPatternType = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

export const ContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  const { fill, xArray, oArray } = state;

  //calculating length of choosen cubes to asses if it's tie and always starting with x
  const cubesFilled = xArray.length + oArray.length;

  const startGameHandler = () => {
    dispatch({ type: "START_GAME" });
  };

  const choosingCube = (cubeIndex: number) => {
    dispatch({ type: `CHOOSED_CUBE_${fill}`, payload: cubeIndex });
  };

  // if there's winner or tie stopping the game
  const checkingAwinner = () => {
    cubesFilled === 9 && dispatch({ type: "TIE" });

    const playerArray = fill === "O" ? oArray : xArray;

    for (let i = 0; i < winningPattern.length; i++) {
      const matchingArrays = winningPattern[i].every((numb) =>
        playerArray.includes(numb)
      );
      matchingArrays && dispatch({ type: "USER_WON" });
    }

    dispatch({ type: "CHANGE_TURN" });
  };

  //after updating player cubes array assessing if there's a winner or ended a tie
  useEffect(() => {
    if (!cubesFilled) return;
    checkingAwinner();
  }, [oArray, xArray]);

  return (
    <GeneralContext.Provider
      value={{
        ...state,
        choosingCube,
        startGameHandler,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export const useCtx = () => {
  return useContext(GeneralContext);
};
