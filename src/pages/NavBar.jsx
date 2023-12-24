import Logo from "../ui/Logo";
import NavList from "../ui/NavList";

function NavBar() {
  return (
    <nav className="sticky w-full top-0 z-10 backdrop-filter backdrop-blur-sm opacity-90 ">
      <div className="flex flex-wrap justify-between mx-auto p-4 items-center">
        <Logo />
        <NavList />
      </div>
    </nav>
  );
}

export default NavBar;
