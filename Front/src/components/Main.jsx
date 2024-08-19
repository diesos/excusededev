import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import myImage from "/ExcuseDev-Avatar.png";
import { TypeAnimation } from "react-type-animation";
import RandomExcuse from "../services/RandomExcuse";
import ButtonGenerate from "./Button";
import TextGen from "./TextGen";
import AddExcuse from "./AddExcuse";

const Main = () => {
  const [buttonTime, setButtonTime] = useState(false);
  const [circular, setCircular] = useState(false);
  const [excuse, setExcuse] = useState("");
  const [tag, setTag] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addExcuse, setAddExcuse] = useState(false);

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
      setError("Erreur lors de la génération d'excuse : " + error.message);
    }
  };

  return (
    <>
      <NavBar setAddExcuse={setAddExcuse} />
      <div className="main-container">
        <div className="bubble shadow large bottom">
          <TypeAnimation
            sequence={[
              addExcuse
                ? "Ajoutons une nouvelle excuse !"
                : "Bonjour, peut-tu m'aider à trouver une excuse ?",
              3000,
            ]}
            wrapper="span"
            speed={80}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
            className="animated-text"
            key={addExcuse}
          />
          {addExcuse && <AddExcuse />}

          <div>
            {error && <p>{error}</p>}
            {!loading && !error && (
              <>
                {/* //TEXTGENERATION */}
                <TextGen tag={tag} excuse={excuse} addExcuse={addExcuse} />
              </>
            )}
          </div>
          <ButtonGenerate
            onClick={timeHandler}
            buttonTime={buttonTime}
            addExcuse={addExcuse}
            circular={circular}
          />
        </div>

        <img className="hero" src={myImage}></img>
      </div>
    </>
  );
};

export default Main;
