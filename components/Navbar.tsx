import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container z-30 py-5 top-0 w-full">
      <Link href="/" className="hidden lg:block">
        <p>Themba</p>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex  backdrop-filter backdrop-blur-sm bg-white/30 rounded-full space-x-8 px-6 py-2">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className=" bg-gradient-to-r text-lg from-gray-800 via-gray-700 to-gray-800 inline-block text-transparent bg-clip-text"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        {" "}
        <Link href="/">
          <p>Contact</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
