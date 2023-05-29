import { Inter } from "next/font/google";
import "../../globals.css";
import { DashboardMenu, HomepageMenu } from "@/components/common/Menus";
import { HomepageFooter } from "@/components/common/Footers";
import MenuProvider from "@/providers/MenuProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Build Your Soul",
  description: "BYS Project ltd. Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white bg-black`}>
        <MenuProvider>
          <HomepageMenu />
          <div className="flex">
            <DashboardMenu />
            {children}
          </div>
          <HomepageFooter />
        </MenuProvider>
      </body>
    </html>
  );
}
