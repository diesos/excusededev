import styled, { css } from 'styled-components'

const HeadNav = styled.h1`
    font-size: clamp(20px, 4vw, 30px);
    font-family: "Poppins", sans-serif;
    padding: clamp(15px, 5vw, 30px);
    margin-left: clamp(5px, 5vw, 10%);
`;
const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;

`



const Header = () => {
	return(
		<NavContainer>
			<HeadNav>
				Excuse De Dev
			</HeadNav>
			<ul>
				<li>Accueil</li>
				<li>À propos</li>
			</ul>
			</NavContainer>
	)

}

export default Header
