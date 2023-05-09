import Link from "next/link";

export default function Menu() {
  return (
    <div className="fixed z-10 top-0 left-0 w-full text-3xl font-bold bg-white text-black p-4 border-b-4 border-solid border-black">
      <div className="grid grid-cols-3">
        <h1>BYS LOGO</h1>
        <div className="flex items-center justify-evenly">
          <Link href="/">Home</Link>
          <Link href="/launchpad">Launchpad</Link>
        </div>
        <div className="flex justify-end">
          <h1>Language</h1>
        </div>
      </div>
    </div>
  );
}
