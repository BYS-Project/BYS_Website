import { Space_Mono } from "next/font/google";
import "../globals.css";
import { HomepageMenu } from "@/components/common/Menus";
import { HomepageFooter } from "@/components/common/Footers";
import ScrollProvider from "@/providers/ScrollProvider";

const font = Space_Mono({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Build Your Soul",
  description: "BYS Project ltd. Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} text-white bg-black`}>
        <ScrollProvider>
          <HomepageMenu />
          {children}
          <HomepageFooter />
        </ScrollProvider>
      </body>
    </html>
  );
}
