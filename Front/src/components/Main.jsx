import { useState, useEffect } from "react";
import Header from "./Header";
import myImage from "/ExcuseDev-Avatar.png";
import { TypeAnimation } from "react-type-animation";
import RandomExcuse from "../services/RandomExcuse";
import ButtonGenerate from "./Button";
import TextGen from "./TextGen";
import CircularProgress from "@mui/material/CircularProgress";

const Main = () => {
  const [buttonTime, setButtonTime] = useState(false);
  const [circular, setCircular] = useState(false);
  const [excuse, setExcuse] = useState("");
  const [tag, setTag] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addExcuse, setAddExcuse] = useState(false);
  const [genExcuse, setGenExcuse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonTime(true);
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  const timeHandler = () => {
    setCircular(true);
    const timer = setTimeout(() => {
      setCircular(false);
    }, 1700);
    const waitingFetch = setTimeout(() => {
      fetchExcuse();
    }, 600);
    return () => {
      clearTimeout(timer);
      clearTimeout(waitingFetch);
    };
  };

  const fetchExcuse = async () => {
    try {
      let newExcuse;
      let newTag;
      do {
        const data = await RandomExcuse();
        if (data.succes) {
          newExcuse = data.data.message;
          newTag = data.data.tag;
        } else {
          setError(`Error: ${data.message}`);
          return;
        }
      } while (newExcuse === excuse); // Continue à fetcher jusqu'à obtenir une nouvelle excuse

      setExcuse(newExcuse);
      setTag(newTag);
      setLoading(false);
    } catch (error) {
      setError("Error fetching activities: " + error.message);
    }
  };

  return (
    <>
      <Header
      setAddExcuse={setAddExcuse}
      />

      <div className="bubble shadow large bottom">



        <TypeAnimation
          sequence={[addExcuse? "Ajoutons une nouvelle excuse !" : "Bonjour, peut-tu m'aider à trouver une excuse ?", 3000]}
          wrapper="span"
          speed={80}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
          className="animated-text"
          key={addExcuse}
        />

        <ButtonGenerate onClick={timeHandler} buttonTime={buttonTime} addExcuse = {addExcuse} />

        <div>
          {error && <p>{error}</p>}
          {!loading && !error && (
            <>
              {circular && (
                <div className="circular-progress">
                  <CircularProgress />
                </div>
              )}
              {/* //TEXTGENERATION */}
              <TextGen tag={tag} excuse={excuse} addExcuse={addExcuse} />
            </>
          )}
        </div>

      </div>

      <img className="hero" src={myImage}></img>
    </>
  );
};

export default Main;
