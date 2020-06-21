import React, {useContext} from 'react';
import styled from "styled-components";
import { AppContext } from '../Context/AppProvider';
import { AuthContext } from '../Context/AuthProvider';

const NavBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  min-height: 50px;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${props => props.theme.currentTheme.textColor};
  list-style: none;
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const NavLink = styled.div`
  display: block;
  padding: 1rem;
  transition: 250ms ease background-color;
  color: 
  &:hover {
    cursor: pointer;
    background-color: skyblue;
  }
`;

const NavToggle = styled(NavLink)`
  text-decoration: underline;
`;
const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  margin-top: 6px;
  border: 1px solid ${props => props.theme.currentTheme.textColor};
  background: ${props => props.theme.currentTheme.backgroundColor};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: ${props => props.theme.currentTheme.textColor};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${props => props.theme.currentTheme.backgroundColor};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;


export default function Nav() {
  const { dispatch } = useContext(AppContext);
  const toggleTheme = () => {
    dispatch({ type: "toggleTheme" });
  };
  return (
      <NavBar>
        <NavMenu>
          <NavLink>Smart-Barin</NavLink>
        </NavMenu>
          <CheckBoxWrapper>
            <CheckBox id="checkbox" type="checkbox" onChange={toggleTheme} />
            <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
      </NavBar>
  )
}
