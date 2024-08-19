import styled, { css } from 'styled-components'
import { Link, useLocation } from 'react-router-dom';

const HeadNav = styled.h1`
    font-size: clamp(20px, 4vw, 30px);
    font-family: "Poppins", sans-serif;
    padding: clamp(15px, 5vw, 30px);
    margin-left: clamp(5px, 5vw, 10%);
`;
const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	font-family: "Poppins";

`
const NavBtn = styled.button `
	background-color: transparent;
	border-radius: 8px;
	padding: 10px;
	color:white;

`



const NavBar = ({setAddExcuse}) => {

	if (location.pathname != '/')
		return;


	return(
		<NavContainer>
			<HeadNav>
				Excuse De Dev
			</HeadNav>
				<ul>
				<li>
					<a onClick={(e) => {
					e.preventDefault();
					setAddExcuse(Value => !Value)
					}}><Link to="/">
						<NavBtn>
							Ajouter/Générer Une Excuse
						</NavBtn>
						</Link>
						</a>
				</li>
			</ul>
			</NavContainer>
	)

}

export default NavBar
