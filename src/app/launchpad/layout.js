import { LaunchpadMenu } from "@/components/Menus";

export default function RootLayout({ children }) {
  return (
    <div>
      <div className="flex flex-nowrap">
        <LaunchpadMenu />
        {children}
      </div>
    </div>
  );
}
