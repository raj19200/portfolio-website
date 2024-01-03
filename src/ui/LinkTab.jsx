/* eslint-disable react/prop-types */
import { Link } from "react-scroll";

function LinkTab({ tabName, tabTitle }) {
  return (
    <li>
      <Link
        defaultValue="home"
        activeClass="text-websiteColor"
        smooth
        spy
        to={tabName}
        className="block py-2 px-3 rounded md:bg-transparent  md:p-0 hover:text-websiteColor text-base"
        aria-current="page"
      >
        {tabTitle}
      </Link>
    </li>
  );
}

export default LinkTab;
