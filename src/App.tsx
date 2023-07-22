import GameTable from "./components/GameTable";
import Welcoming from "./components/Welcoming";
import Winner from "./components/Winner";
import { useCtx } from "./store/GeneralContext";
function App() {
  const { winner, startGame } = useCtx();

  let content = <Welcoming />;

  if (!winner && startGame) {
    content = <GameTable />;
  }

  if (winner && startGame) {
    content = <Winner />;
  }

  return (
    <div className="flex flex-col max-h-screen items-center py-14">
      {content}
    </div>
  );
}

export default App;
