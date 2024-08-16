import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Header from "./Header";
import myImage from "/ExcuseDev-Avatar.png";
import { TypeAnimation } from "react-type-animation";
import RandomExcuse from "../services/RandomExcuse";

const Wrapper = styled.section`
  height: 100%;
`;
const Main = () => {
  const [buttonTime, setButtonTime] = useState(false);
  const [excuse, setExcuse] = useState('');
  const [tag, setTag] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonTime(true);
    }, 3100);
    return () => clearTimeout(timer);
  }, []);


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

      setExcuse(newExcuse); // Mettre à jour l'état avec la nouvelle excuse
      setTag(newTag); // Mettre à jour l'état avec la nouvelle excuse
      setLoading(false)
    } catch (error) {
      setError("Error fetching activities: " + error.message);
    }
  };

  return (
    <Wrapper>
      <Header />
      <div className="bubble shadow large bottom">
        <TypeAnimation
          sequence={["Bonjour, peut-tu m'aider à trouver une excuse ?", 3000]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
          className="animated-text"
        />
        {buttonTime && (
          <button className="generate-btn" onClick={fetchExcuse}>
            Generate an Excuse
          </button>
        )}
        <div>
          {loading && <p></p>}
          {error && <p>{error}</p>}
          {!loading && !error && (
            <>
              <p>Object: {tag}</p>
              <p>Excuse: {excuse}</p>
            </>
          )}
        </div>
      </div>
      <img className="hero" src={myImage}></img>
    </Wrapper>
  );
};

export default Main;
