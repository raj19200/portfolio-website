import HomeDetails from "../ui/HomeDetails";
import HomeImage from "../ui/HomeImage";

function Home() {
  return (
    <div className="mt-28 lg:mt-36 flex  items-center flex-col lg:flex-row justify-between md:pl-24 md:pr-24 lg:pl-32 lg:pr-32 ">
      <HomeDetails />
      <HomeImage />
    </div>
  );
}

export default Home;
