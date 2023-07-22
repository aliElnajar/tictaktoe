const PlayerProfile = ({ svgImg, state }: any) => {
  return (
    <div className="flex flex-col space-y-2 items-center">
      <img
        src={svgImg}
        className={`${state ? "" : "blur-[1px]"} w-[80px] bottom-0`}
      />
      <h6 className="first-letter:uppercase font-semibold ">
        {state ? "turn" : "waiting"}
      </h6>
    </div>
  );
};

export default PlayerProfile;
