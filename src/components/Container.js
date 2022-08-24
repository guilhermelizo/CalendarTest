import "./Container.css";
import LeftContainer from "./leftContainer/LeftContainer";
import RightContainer from "./rightContainer/RightContainer";

function Container() {
  return (
    <div>
      <div className="Container">
        <RightContainer />
        <LeftContainer />
      </div>
    </div>
  );
}

export default Container;
