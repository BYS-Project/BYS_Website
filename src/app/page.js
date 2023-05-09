"use client";
export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Main Section */}
      <div className="flex items-center h-screen">
        <div className="flex flex-wrap w-full">
          <div className="flex flex-col gap-8 pl-[10%] flex-1">
            <h1 className="text-8xl font-bold ">
              SOME
              <br />
              RANDOM AND
              <br />
              COOL TEXT
            </h1>
            <h2 className="text-3xl">Small description of the project</h2>
            <div className="flex gap-8">
              <h2>DISCORD LOGO</h2>
              <h2>TWITTER LOGO</h2>
              <h2>MEDIUM LOGO</h2>
              <h2>LINKEDIN LOGO</h2>
            </div>
          </div>
          <div className="flex items-center justify-center flex-1">
            <div className="grid gap-8 text-5xl font-bold">
              <h1 className="text-center border-2 border-solid border-white rounded-xl px-4 py-4">
                LIGHTPAPER
              </h1>
              <h1 className="text-center border-2 border-solid border-white rounded-xl px-4 py-4">
                WHITEPAPERS
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Team Section */}
      <div className="min-h-screen text-center flex items-center justify-center border-t-4 border-solid border-white justify-evenly">
        <h1>IO</h1>
        <h1>DISMA</h1>
        <h1>SAM</h1>
        <h1>JACOPO</h1>
        <h1>ERMES</h1>
        {/* Links to LinkedIn, Twitter or Instagram for artists */}
      </div>
    </div>
  );
}
