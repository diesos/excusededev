import React, { useEffect } from 'react'
import { useNavigate } from "react-router";
import NavBar from "./NavBar";
import myImage from "/lost.gif";
import { TypeAnimation } from "react-type-animation";
import CircularProgress from "@mui/material/CircularProgress";

const Lost = () => {

	const navigate = useNavigate()

	useEffect(() => {
	  setTimeout(() => {
		navigate('/')
	  }, 5000)
	}, [])

  return (
    <>
    <NavBar
      />
    <div className="main-container">

      <div className="bubble shadow large" style={{display:"flex", flexDirection:'column', width:"100%", justifyContent:'center', left:"-30%", right:"50%	"}}>

        <TypeAnimation
          sequence={["i’m lost ?", 3000]}
          wrapper="span"
          speed={80}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
          className="animated-text"
        />

		<img style={{maxWidth:'280px', margin:'20px' }} src={myImage}></img>

		<TypeAnimation
          sequence={["let's go back", 3000]}
          wrapper="span"
          speed={30}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
          className="animated-text"
        />
		<CircularProgress />
      </div>

      </div>

    </>
  );
};

export default Lost;
