import React from "react";
import styled from "styled-components";
import { Data } from "../common/Data";
import Link from "next/link";
import { Darksvg, Lightsvg } from '../common/Svg'

const Menu = ({
  isDark,
  changeDarkMode,
  open,
  setOpen,
  language,
  changeLangeuge
}) => {
  console.log("open=",open)
  return (
    <Navbar open={open}>
      {/* <div><h2>{Data.about[language ? 'en' : 'nr'].h2}</h2></div> */}
      <h1><Link href="/">{Data.about[language ? 'en' : 'nr'].h2}</Link></h1>

      <Ul>
        {Data.menu[language ? 'en' : 'nr'].map((item, inx) => (
          <li key={inx}>
            <Link onClick={() => setOpen(false)} href={item.href}>
              {item.name}
            </Link>
          </li>
        ))}
      </Ul>
      <Copyright>
        <h5>© 2023 Webutvikler</h5>
        <h5>
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/farsangi/" 
            target="_blank"
            rel="noreferrer"
          >
            Majid
          </a>
        </h5>
      </Copyright>
      <TaggleDiv>
        { isDark ? <Lightsvg fontSize="40px" changeDarkMode={changeDarkMode}/> : <Darksvg fontSize="40px" changeDarkMode={changeDarkMode}/> }
        { language ? <TaggleSpan onClick={changeLangeuge}>Nr</TaggleSpan> : <TaggleSpan onClick={changeLangeuge}>En</TaggleSpan>}
      </TaggleDiv>
    </Navbar>
  );
};

export default Menu;

const Navbar = styled.div`

  h2 {
    color: ${({ theme }) => theme.Text_Logo};
    margin: 20px 0px;
  }

  li {
    margin: 7px 0px;
    margin-right: 1vw;
    font-size: 17px;
  }
  li:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 0px;
  }

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ theme }) => theme.BC_Menu};
  a {
    color: ${({ theme }) => theme.Text_Menu};
    :hover {
      color: ${({ theme }) => theme.Text_Menu_Hover};
    }
  }
  @media (min-width: 900px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 25%;
  }

  @media (max-width: 899px) {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;
  }
`;

const TaggleDiv = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
`

const Ul = styled.ul`
`
const Copyright = styled.div`
  margin: 20px 0px;
`
export const TaggleSpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  color: ${({theme}) => theme.Icon_Color };
  margin: ${({margin}) => margin };
  margin-right: 15px;
  width: 40px;
  height: 40px;
  background-color: ${({theme}) => theme.Icon_bkColor };
  padding: 6px;
  border-radius: 7px;
  cursor: pointer;
`