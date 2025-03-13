'use client'
import React from 'react'
import Burger from './Burger.js'
import { Data } from '../common/Data.js'
import Link from 'next/link'
import { Nav, Iconbar } from './Navbar.styled.js'
import { Darksvg, Lightsvg } from '../common/Svg'
import { TaggleSpan } from './Menus.styled.js'

function Navbar({ isDark, changeDarkMode, language, changeLangeuge }) {
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

export default React.memo(Navbar)
