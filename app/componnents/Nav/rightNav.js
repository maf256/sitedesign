import React from 'react';
import styled from 'styled-components';
import { Data } from '../common/Data';
import Language from '../language/Language';


const RightNav = ({ open,selectedLanguage, setSelectedLanguage}) => {
  return (
    <Navbar open={open}>
      <h1>Webutvikler</h1>
      <Ul >
      {
        Data.menu['en'].map((item, inx) =>
        <li key={inx}><a href={item.href}>{item.name}</a></li>
        )
      }
        <li><Language setSelectedLanguage={setSelectedLanguage}/></li>
      </Ul>
      <div>© 2023 Tokyo
Created by Codeefly</div>

    </Navbar>
  )
}

export default RightNav

const Navbar = styled.div`
  width: 25%;
  height: 100vh;
  background-color: #0a26407a;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  @media (max-width: 768px) {
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      select {
        color: #FFE9B1;
      }
    }
    a {
      color: ${({ open }) => open ? '#FFE9B1' : "#112B3C"}; 
    }
  }


`

const Ul = styled.ul`

  list-style: none;
  li {
    select {
      appearance: none;
      background-color: transparent;
      border: none;
      width: 100%;
      cursor: inherit;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;   
      color: white;
      outline: none;
      padding: 2px;
      :focus {
        background-color: #8D9EFF;
        
      }
      :hover {
        background-color: #8D9EFF;
      }
      
    }
    padding: 0 2vw 0 2vw;
    border: 1px solid rgba(0,0,0,0);    
    :hover {
        background-color: #8D9EFF;
        border: 1px solid #8D9EFF;
        border-radius: 14px 14px 14px 14px;
        transition: background-color 0.7s ease;
    }
   }
   a {
    text-decoration: none;
    color: white;
    font-weight: 600;
  }

`;