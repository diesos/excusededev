import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Header from "./Header";
import myImage from '/ExcuseDev-Avatar.png'
import { TypeAnimation } from 'react-type-animation';
import  RandomExcuse  from '../services/RandomExcuse';



const Wrapper = styled.section`
	height: 100%;
`
const Main = () => {

	const [buttonTime, setButtonTime] = useState(false);
	const [excuse, setExcuse] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
	  const timer = setTimeout(() => {
		setButtonTime(true);
	  }, 3100);
	  return () => clearTimeout(timer);
	}, []);

	  useEffect(() => {
		const fetchExcuse = async () => {
		  try {
			const data = await RandomExcuse;
			if (data.succes){
				setExcuse(data.message);
			}
		  } catch (error) {
			setError('Error fetching activities');
		  }
		};

		fetchExcuse();
	}, [excuse]);




	return(
		<Wrapper>
			<Header />
			<div class="bubble shadow large bottom">
			<TypeAnimation
		sequence={[
			"Bonjour, je suis un DEV, et j'ai un soucis..",
			3000
		]}
			wrapper="span"
		speed={50}
		style={{ fontSize: '2em', display: 'inline-block'}}
		repeat={Infinity}
		className='animated-text'
		/>
		{buttonTime &&
			<button
				className='generate-btn'
				onClick={fetchExcuse}>
			</button>}


			</div>
			<img className="hero" src={myImage}></img>
		</Wrapper>
	)
}

export default Main
