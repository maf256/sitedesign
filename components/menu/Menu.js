import React from 'react';
import styled from 'styled-components';
import { Data } from '../common/Data';
import Language from '../language/Language';
import Link from 'next/link'


const Menu = ({changeDarkMode, open, setOpen,selectedLanguage, setSelectedLanguage}) => {
  return (
    <Navbar open={open}>
      <div>
        <h1>Webutvikler</h1>
        <button onClick={changeDarkMode}>changeDarkMode</button>
      </div>
      <Ul >
      {
        Data.menu['en'].map((item, inx) =>
        <li key={inx}><Link onClick={()=> setOpen(false)} href={item.href}>{item.name}</Link></li>
        )
      }
        <li><Language setSelectedLanguage={setSelectedLanguage}/></li>
      </Ul>
      <div>
        <h5>© 2023 Webutvikler</h5>
        <h5>Created by <a href='https://www.linkedin.com/in/farsangi/' target="_blank" rel="noreferrer">Majid</a></h5>
      </div>

    </Navbar>
  )
}

export default Menu

const Navbar = styled.div`
  div {
    padding: 35px 0px;
    padding-left: 1vw;
  }

  li {
    margin: 7px 0px;
    margin-right: 1vw;
  }
  li:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 0px;

  }

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({theme}) => theme.BC_Menu};
  padding-right: 10%;
  a {
    color: black;
  }
  @media (min-width: 900px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 25%;
  }

  @media (max-width: 899px) {
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }


`

const Ul = styled.ul`

`;