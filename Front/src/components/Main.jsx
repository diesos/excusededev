import styled, { css } from 'styled-components'
import Header from "./Header";
import myImage from '/ExcuseDev-Avatar.png'
import { TypeAnimation } from 'react-type-animation';

const Wrapper = styled.section`
	height: 100%;
`


const Main = () => {
	return(
		<Wrapper>
		<Header />
		<div class="bubble shadow large bottom">
		<TypeAnimation
      sequence={[
		"Bonjour, je suis un DEV, et j'ai un soucis",
        3000
	]}
	wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block'}}
      repeat={Infinity}
	  className='animated-text'
    />



		</div>
		<img className="hero" src={myImage}></img>
		</Wrapper>
	)
}

export default Main
