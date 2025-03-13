'use client'
import { useState, useRef, useEffect } from 'react'
import Menu from './Menu'
import StyledBurger from './Burger.styled.js'

export default function Burger({
  isDark,
  changeDarkMode,
  language,
  changeLangeuge,
}) {
  const [open, setOpen] = useState(false)
  const navbarRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = e => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    if (open) {
      window.addEventListener('click', handleOutsideClick)
    }

    return () => window.removeEventListener('click', handleOutsideClick)
  }, [open])

  return (
    <div ref={navbarRef}>
      <StyledBurger
        aria-label="Toggle menu"
        aria-expanded={open}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <Menu
        isDark={isDark}
        changeDarkMode={changeDarkMode}
        open={open}
        setOpen={setOpen}
        language={language}
        changeLangeuge={changeLangeuge}
      />
    </div>
  )
}
