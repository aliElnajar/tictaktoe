import { useCtx } from "../store/GeneralContext";
import positiveSVG from "../assets/positiveAttitudeSVG.svg";
const Welcoming = () => {
  const { startGameHandler } = useCtx();
  return (
    <div className="flex h-screen items-center w-[50vw] flex-col space-y-8 py-12  ">
      <h2 className="text-lg font-semibold">Welcome to,</h2>
      <h1 className="font-semibold  text-2xl text-gradient-to-bl">
        Tik tac toe{" "}
      </h1>
      <button className="btn " onClick={() => startGameHandler()}>
        start the game
      </button>
      <img src={positiveSVG} alt="welcoming-svg" className="w-[250px]" />
    </div>
  );
};

export default Welcoming;
