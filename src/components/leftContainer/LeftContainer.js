import userIcon from "../../assets/userIcon.jpg";
import "./LeftContainer.css";

function LeftContainer() {
  return (
    <>
      <div className="LeftContainer">
        <div className="DivUser">
          <div className="DivPicture">
            <img className="UserIcon" src={userIcon} />
          </div>

          <div className="DivTitle">
            <h1>Professional Name</h1>
            <p>Psicologist Name</p>
            <p>Estrelas Name</p>
            <p>Valor Dinheiro Name</p>
          </div>
        </div>

        <div className="DivText">
          <p>
            Lorem isum dolor lorem ipsum dolor lorem ipsum Lorem isum dolor
            lorem ipsum dolor lorem ipsum Lorem isum dolor lorem ipsum dolor
            lorem ipsum Lorem isum dolor lorem ipsum dolor lorem ipsum Lorem
            isum dolor lorem ipsum dolor lorem ipsum Lorem isum dolor lorem
            ipsum dolor lorem ipsum Lorem isum dolor lorem ipsum dolor lorem
            ipsum
          </p>
        </div>
      </div>
    </>
  );
}

export default LeftContainer;
