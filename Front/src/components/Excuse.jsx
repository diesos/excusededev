import NavBar from "./NavBar";
import ExcuseDetails from "../services/ExcuseDetails";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const Excuse = () => {
  const [excuse, setExcuse] = useState(null);
  const isNumber = (value) => !isNaN(Number(value));
  const { id } = useParams();

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
          <ExcuseDetails excuse={excuse} setExcuse={setExcuse} id={id} />
          <Link to="/">
            <button className="generate-btn">Go back to Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Excuse;
