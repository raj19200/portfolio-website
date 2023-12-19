import Logo from "../utils/Logo";
import NavList from "../utils/NavList";

function NavBar() {
  return (
    <nav className="sticky w-full top-0 z-10 backdrop-filter backdrop-blur-sm opacity-90	">
      <div className="flex flex-wrap justify-between mx-auto p-4">
        <Logo />
        <NavList />
      </div>
    </nav>
  );
}

export default NavBar;
