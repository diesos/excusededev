import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

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
`;

const NavBtn = styled.button`
  background-color: transparent;
  border-radius: 8px;
  padding: 10px;
  color: white;
  border: none;
  cursor: pointer;
`;

const NavBar = ({ setAddExcuse }) => {
  const location = useLocation();

  // Check if the current path is not '/'
  if (location.pathname !== "/") return null;

  return (
    <NavContainer>
      <HeadNav>Excuse De Dev</HeadNav>
      <ul>
        <li>
          <NavBtn
            onClick={(e) => {
              e.preventDefault();
              setAddExcuse((value) => !value);
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Ajouter/Générer Une Excuse
            </Link>
          </NavBtn>
        </li>
      </ul>
    </NavContainer>
  );
};

export default NavBar;
