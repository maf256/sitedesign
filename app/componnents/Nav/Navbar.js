"use client"
import React from 'react'
import styled from 'styled-components'
import LogoComponent from '../Logo/LogoComponent.js'
import Burger from './Burger.js'

export const Navbar = ({selectedLanguage, setSelectedLanguage}) => {

  return (
    <Nav >
        <LogoComponent />
        <Burger selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />        
    </Nav>
  )
}

const Nav = styled.nav `
    width: 100%;
    height: 70px;
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 5% 0 5%;
    background-color: #0a26407a;
    position: fixed;
`