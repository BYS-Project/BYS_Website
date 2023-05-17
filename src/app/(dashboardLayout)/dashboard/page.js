"use client";
export default function Dashboard() {
  return (
    <div className="flex items-center justify-center flex-1 pt-44">
      <div className="flex flex-col gap-12">
        <div className="text-center flex flex-col gap-4 text-2xl">
          <h1 className="text-6xl font-bold">Welcome at $BYS</h1>
          <h2>Another placeholder phrase</h2>
          <div className="flex gap-8 justify-evenly">
            <h1>Litepaper</h1>
            <h1>Whitepaper</h1>
            <h1>FAQs</h1>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <h1>$BYS = SomeNumber</h1>
            <h1>Last update: SomeDate</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1>Total Liquidity: SomeNumber</h1>
            <h1>Volume 24h: SomeNumber</h1>
            <h1>Transactions 24h: SomeNumber</h1>
            <h1>Burned $BYS: SomeNumber</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
