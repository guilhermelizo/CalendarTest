import Body from "./body/Body";
import Header from "./header/Header";
import "./RightContainer.css";

function RightContainer() {
  return (
    <div className="RightContainer">
      <div className="Calendar">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default RightContainer;
