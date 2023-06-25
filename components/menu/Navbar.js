"use client"
import React from 'react'
import styled from 'styled-components'
import Burger from './Burger.js'
import { Data } from '../common/Data.js'
import Link from 'next/link'
import { Darksvg, Lightsvg } from '../common/Svg'


export default function Navbar  ({ isDark, changeDarkMode, language, changeLangeuge }) {

  return (
    <Nav >
      <Iconbar>
        <h1><Link href="/">{Data.about[language ? 'en' : 'nr'].h2}</Link></h1>
        {isDark ? <Lightsvg fontSize="40px" changeDarkMode={changeDarkMode}/> : <Darksvg fontSize="40px" changeDarkMode={changeDarkMode}/> }
      </Iconbar>
      <Burger isDark={isDark} changeDarkMode={changeDarkMode}  language={language} changeLangeuge={changeLangeuge} />        
    </Nav>
  )
}


const Nav = styled.nav `
  a {
    color: black;
  }
  @media (max-width: 899px) {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    position: fixed;
    background-color: ${({theme}) => theme.BC_Menu};
    margin-right: 100px;

  }
`
const Iconbar = styled.div`
  display: none;
  @media (max-width: 899px) {
      display: flex;
      width: 85%;
      align-items: center;
      justify-content: space-between
    }
    h1 {
      margin-left: 20px;
    }
`