import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <header>
      <nav className="mt-6 px-5">
        <ul className="flex items-center sm:ml-12 gap-10 xl:gap-[120px]">
          <li>
            <Link to="/">
              <img src={Logo} alt="Golds Gym Logo" className="w-12 h-12 my-5" />
            </Link>
          </li>
          <li className="flex items-end gap-10 text-xl">
            <Link
              to="/"
              className="no-underline text-[#3A1212] hover:border-b hover:border-[#ff2625]"
            >
              Home
            </Link>
            <a href="/#exercises" className="no-underline text-[#3A1212] hover:border-b hover:border-[#ff2625]">
              Exercises
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
