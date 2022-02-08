import FetchData from "../../Components/FetchData/FetchData";
import Graph from "../../Components/Graph/Graph";
import Header from "../../Components/Header/Header";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="homeWrapper">
        <div className="homeContent">
          <Header />
          <button className="zoomIn">+</button>
          <button className="zoomOut">-</button>
          <div className="home__zoomable">
            <Graph />
          </div>
          <FetchData />
        </div>
      </div>
    </div>
  );
}

export default Home;
