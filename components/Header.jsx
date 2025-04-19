import Link from "next/link";
import { Button } from "./ui/button"; // Use named import
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar"; // Import Mobilenavbar component
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Bett<span className="text-accent">.</span> {/* Light green dot */}
          </h1>
        </Link>

        {/* Desktop navbar and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button className="ml-4">Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Navbar */}
        <div className="xl:hidden"><MobileNavbar/>
      </div>
      </div>
    </header>
  );
};

export default Header;
