import { useCtx } from "../store/GeneralContext";
const Cube = ({ index }: { index: number }) => {
  const { xArray, oArray, choosingCube } = useCtx();

  const markedX = xArray.includes(index);
  const markedO = oArray.includes(index);
  return (
    <button
      disabled={markedO || markedX}
      onClick={() => choosingCube(index)}
      className={`${
        markedX
          ? "bg-red-700 hover:bg-red-700"
          : markedO
          ? "bg-emerald-700 hover:bg-emerald-700"
          : ""
      } cube`}
    >
      <h1 className="object-contain">{markedX ? "X" : markedO ? "O" : ""}</h1>
    </button>
  );
};

export default Cube;
