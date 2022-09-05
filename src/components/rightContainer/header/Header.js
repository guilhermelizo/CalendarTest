import { Gradient } from "react-gradient";
import "./Header.css";

const gradients = [["#0876F3", "#52AFFF"]];

function Header() {
  return (
    <>
      <div className="HeaderContainer">
        {/* <div className="Title"> */}
        <Gradient
          gradients={gradients} // required
          property="background"
          duration={3000}
          angle="45deg"
        >
          <h2>Schedule your session!</h2>
          <h4> Timezone: Lisbon (+1)</h4>
        </Gradient>
      </div>
    </>
  );
}

export default Header;
