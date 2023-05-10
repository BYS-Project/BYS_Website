export default function LaunchpadMenu() {
  return (
    <div className="h-screen py-24 bg-white text-black w-max">
      <div className="h-full flex flex-col justify-evenly px-5 text-xl">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">USER</h1>
          <div className="pl-4 text-2xl">
            <h1>Idk1</h1>
            <h1>Idk2</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">GENERAL</h1>
          <div className="pl-4 text-2xl">
            <h1>Dashboard</h1>
            <h1>Staking</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">PROJECTS</h1>
          <div className="pl-4 text-2xl">
            <h1>Project Sasso</h1>
            <h1>Coming soon...</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">MODULES</h1>
          <div className="pl-4 text-2xl">
            <h1>Community Scam</h1>
            <h1>Coming soon...</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
