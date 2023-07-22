import Cube from "./Cube";
import oUserSVG from "../assets/oUserSVG.svg";
import xUserSVG from "../assets/xUserSVG.svg";
import PlayerProfile from "./PlayerProfile";
import { useCtx } from "../store/GeneralContext";
const GameTable = () => {
  const { fill } = useCtx();
  const array = Array.from({ length: 9 }, (_, i) => i);
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 space-x-5 w-[500px]">
      <PlayerProfile svgImg={oUserSVG} state={fill === "O"} />
      <div className="grid-cols-3 grid mt-10 ">
        {array.map((i) => (
          <Cube index={i} key={i} />
        ))}
      </div>
      <PlayerProfile svgImg={xUserSVG} state={fill === "X"} />
    </div>
  );
};

export default GameTable;
