export const Card = () => {
  return (
    <div className="w-[230px] max-w-[230px] h-[439px] rounded-md bg-secondary flex flex-col">
      <img
        src="/godfather.jpg"
        className="w-[229.73px] h-[340px] rounded-t-md"
        alt="z"
      />
      <div className="w-[100%] h-[95px] p-2 flex flex-col">
        <div className="w-[100%] h-[23px] flex items-center gap-1">
          <div className="size-4">
            <img src="/star.svg" />
          </div>
          <div className="w-[194px] h-full flex items-center">
            <p className="text-black font-bold">9.2</p>
            <p className="text-gray-500">/10</p>
          </div>
        </div>
        <div className="w-full h-full">
          <p className="font-bold">How to train</p>
        </div>
      </div>
    </div>
  );
};
