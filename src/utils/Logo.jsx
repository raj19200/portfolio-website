import { Link } from "react-scroll";

function Logo() {
  return (
    <Link
      activeClass="text-websiteColor"
      smooth
      spy
      to="home"
      className="block py-2 px-3 rounded md:bg-transparent  md:p-0 hover:text-websiteColor cursor-pointer"
      aria-current="page"
    >
      <img
        src="../src/data/images/LogoRaj.svg"
        className="h-8"
        alt="Flowbite Logo"
      />
    </Link>
  );
}

export default Logo;
