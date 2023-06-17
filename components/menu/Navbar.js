"use client"
import React from 'react'
import styled from 'styled-components'
import Burger from './Burger.js'

export default function Navbar  ({selectedLanguage, setSelectedLanguage}) {

  return (
    <Nav >
        <Logo href="#home"><h1>Webutvikler</h1></Logo>
        <Burger selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />        
    </Nav>
  )
}

const Nav = styled.nav `

  @media (max-width: 899px) {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    position: fixed;
    background-color: white;
  }
`
const Logo = styled.a`
    display: none;
    text-decoration: none;
    margin-left: 10px;
    color: black;

    @media (max-width: 899px) {
      width: 100%;
      display: flex;
    }

`