function Summary() {
  return (
    <div className="w-[90%] xl:max-w-screen-xl rounded-3xl bg-gulf-harbour-500 text-white mx-auto py-10 md:py-28 bg-circularPattern bg-right-top bg-contain bg-no-repeat grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
      <div className="col-span-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-medium">75K+</h1>
        <p className="mt-3 text-lg md:text-xl font-extralight">
          Satisfied users globally
        </p>
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-medium">12%</h1>
        <p className="mt-3 text-lg md:text-xl font-extralight">
          Benefical Cashback
        </p>
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-medium">190+</h1>
        <p className="mt-3 text-lg md:text-xl font-extralight">
          countries supported
        </p>
      </div>
    </div>
  );
}

export default Summary;
