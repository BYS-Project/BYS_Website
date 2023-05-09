import Footer from "@/components/Footer";
import LaunchpadMenu from "@/components/LaunchpadMenu";

export default function RootLayout({ children }) {
  return (
    <div>
      <div className="flex flex-nowrap">
        <LaunchpadMenu />
        {children}
      </div>
      <Footer />
    </div>
  );
}
