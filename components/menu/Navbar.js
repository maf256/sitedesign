'use client'
import React from 'react'
import styled from 'styled-components'
import Burger from './Burger.js'
import { Data } from '../common/Data.js'
import Link from 'next/link'
import { Darksvg, Lightsvg } from '../common/Svg'
import { TaggleSpan } from './Menu.js'

export default function Navbar({
  isDark,
  changeDarkMode,
  language,
  changeLangeuge,
}) {
  return (
    <Nav role="navigation" aria-label="Main menu">
      <Iconbar>
        <h2>
          <Link href="/">{Data.about[language ? 'en' : 'nr'].h2}</Link>
        </h2>
        <span>
          {isDark ? (
            <Lightsvg fontSize="40px" changeDarkMode={changeDarkMode} />
          ) : (
            <Darksvg fontSize="40px" changeDarkMode={changeDarkMode} />
          )}
          {language ? (
            <TaggleSpan onClick={changeLangeuge}>Nr</TaggleSpan>
          ) : (
            <TaggleSpan onClick={changeLangeuge}>En</TaggleSpan>
          )}
        </span>
      </Iconbar>
      <Burger
        isDark={isDark}
        changeDarkMode={changeDarkMode}
        language={language}
        changeLangeuge={changeLangeuge}
      />
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  height: 70px;
  background-color: ${({ theme }) => theme.BC_Menu};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 100;

  @media (min-width: 900px) {
    width: 25%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
  }

  h2 {
    color: ${({ theme }) => theme.Text_Logo};
    font-size: 1.6rem;
  }

  a {
    color: ${({ theme }) => theme.Text_Menu};
    transition: color 0.3s ease;
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.Text_Menu_Hover};
    }
  }
`

const Iconbar = styled.div`
  display: none;
  @media (max-width: 899px) {
    display: flex;
    width: 85%;
    align-items: center;
    justify-content: space-between;
  }
  h2 {
    margin-left: 20px;
  }
  span {
    display: flex;
  }
`
