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
            <p className="pTitle">Professional Name</p>
            <p className="pName">Psicologist Name</p>
            <p className="pStars">Estrelas Name</p>
            <p className="pMoney">Valor Dinheiro Name</p>
          </div>
        </div>

        <div className="DivText">
          <p>
            Lorem isum dolor lorem ipsum dolor lorem ipsum Lorem isum dolor
            lorem ipsum dolor lorem ipsum Lorem isum dolor lorem ipsum dolor
            lorem ipsum Lorem isum dolor lorem ipsum dolor lorem ipsum Lorem
            isum dolor lorem ipsum dolor lorem ipsum Lorem isum dolor lorem
            ipsum dolor lorem ipsum Lorem isum dolor lorem ipsum dolor lorem
            ipsum Lorem isum dolor
          </p>
        </div>
      </div>
    </>
  );
}

export default LeftContainer;
