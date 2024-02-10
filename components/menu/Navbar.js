"use client"
import React from 'react'
import styled from 'styled-components'
import Burger from './Burger.js'
import { Data } from '../common/Data.js'
import Link from 'next/link'
import { Darksvg, Lightsvg } from '../common/Svg'
import {TaggleSpan} from './Menu.js'


export default function Navbar  ({ isDark, changeDarkMode, language, changeLangeuge }) {

  return (
    <Nav >
      <Iconbar>
        <h2><Link href="/">{Data.about[language ? 'en' : 'nr'].h2}</Link></h2>
        <span>
          { isDark ? <Lightsvg fontSize="40px" changeDarkMode={changeDarkMode}/> : <Darksvg fontSize="40px" changeDarkMode={changeDarkMode}/> }
          { language ? <TaggleSpan onClick={changeLangeuge}>Nr</TaggleSpan> : <TaggleSpan onClick={changeLangeuge}>En</TaggleSpan>}
        </span>
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
    h2 {
      margin-left: 20px;
    }
    span {
      display: flex;
    }
`