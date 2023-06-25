"use client"
import React from 'react'
import styled from 'styled-components'
import Burger from './Burger.js'
import { Data } from '../common/Data.js'
import Link from 'next/link'


export default function Navbar  ({ isDark, changeDarkMode, language, changeLangeuge }) {

  return (
    <Nav >
      <h1><Link href="/">{Data.about[language ? 'en' : 'nr'].h2}</Link></h1>
      <Burger isDark={isDark} changeDarkMode={changeDarkMode}  language={language} changeLangeuge={changeLangeuge} />        
    </Nav>
  )
}

const Nav = styled.nav `
  h1 {
    display: none;
    margin-left: 10px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 899px) {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    position: fixed;
    background-color: ${({theme}) => theme.BC_Menu};
    h1 {
      width: 100%;
      display: flex;
    }
  }
`