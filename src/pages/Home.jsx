import HomeDetails from "../ui/HomeDetails";
import HomeImage from "../ui/HomeImage";

function Home() {
  return (
    <div className="pt-14 flex flex-col lg:flex-row justify-between pl-24 pr-24 items-center lg:pl-32 lg:pr-32 ">
      <HomeDetails />
      <HomeImage />
    </div>
  );
}

export default Home;
