import React from 'react';
import styled from 'styled-components';
import { Data } from '../common/Data';
import Language from '../language/Language';


const Menu = ({ open,selectedLanguage, setSelectedLanguage}) => {
  return (
    <Navbar open={open}>
      <div>
        <h1>Webutvikler</h1>
      </div>
      <Ul >
      {
        Data.menu['en'].map((item, inx) =>
        <li key={inx}><a href={item.href}>{item.name}</a></li>
        )
      }
        <li><Language setSelectedLanguage={setSelectedLanguage}/></li>
      </Ul>
      <div>
        <h5>© 2023 Webutvikler</h5>
        <h5>Created by Majid</h5>
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

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
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