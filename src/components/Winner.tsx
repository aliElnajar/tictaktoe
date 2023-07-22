import oUserSVG from "../assets/oUserSVG.svg";
import xUserSVG from "../assets/xUserSVG.svg";
import tieSVG from "../assets/tieSVG.svg";
import { useCtx } from "../store/GeneralContext";

const Winner = () => {
  const { winner, startGameHandler } = useCtx();
  return (
    <div className="flex flex-col items-center space-y-12 py-5">
      <h3 className="font-semibold">
        {` we have a ${winner === "tie" ? "Tie" : "Winner"}`}
      </h3>
      {winner === "tie" ? (
        <img
          src={tieSVG}
          alt="winner-svg"
          className="w-[200px] animate-pulse"
        />
      ) : (
        <img
          src={winner === "X" ? xUserSVG : oUserSVG}
          alt="winner-svg"
          className="w-[250px] animate-pulse"
        />
      )}
      <button className="btn" onClick={() => startGameHandler()}>
        Start a new round
      </button>
    </div>
  );
};

export default Winner;
