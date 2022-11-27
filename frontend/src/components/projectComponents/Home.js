import GetAllProjects from "./GetAllProjects";
import SideBar from "../views/SideBar";

const Home = () => {
  return (
    <div>
      <GetAllProjects />
      <SideBar />
    </div>
  );
};

export default Home;
