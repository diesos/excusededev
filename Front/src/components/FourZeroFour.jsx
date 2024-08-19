import NavBar from "./NavBar";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const FourZeroFour = () => {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <div
          className="bubble shadow large"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            left: "-30%",
            right: "50%	",
          }}
        >
          <TypeAnimation
            sequence={["Error", 3000]}
            wrapper="span"
            speed={80}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
            className="animated-text"
          />

          <TypeAnimation
            sequence={["404", 3000]}
            wrapper="span"
            speed={30}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
            className="animated-text"
          />
		  <Link to='/'><button className="generate-btn">Go back to safe place</button></Link>
        </div>
      </div>
    </>
  );
};
export default FourZeroFour;
