import React from 'react'
import styled from 'styled-components'
import { Data } from '../common/Data'
import Link from 'next/link'
import { Darksvg, Lightsvg } from '../common/Svg'
import { Navbar, TaggleDiv, Ul, Copyright, TaggleSpan } from './Menus.styled.js'

const Menu = ({
  isDark,
  changeDarkMode,
  open,
  setOpen,
  language,
  changeLangeuge,
}) => {
  return (
    <Navbar open={open}>
      <h2>
        <Link href="/">{Data.about[language ? 'en' : 'nr'].h2}</Link>
      </h2>
      <Ul>
        {Data.menu[language ? 'en' : 'nr'].map((item, inx) => (
          <li key={inx}>
            <Link onClick={() => setOpen(false)} href={item.href}>
              {item.name}
            </Link>
          </li>
        ))}
      </Ul>
      <Copyright>
        <h5>© 2023 Webutvikler</h5>
        <h5>
          Created by{' '}
          <a
            href="https://www.linkedin.com/in/farsangi/"
            target="_blank"
            rel="noreferrer"
          >
            Majid
          </a>
        </h5>
      </Copyright>
      <TaggleDiv>
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
      </TaggleDiv>
    </Navbar>
  )
}

export default Menu
