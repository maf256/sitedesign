'use client'
import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react'
import Menu from './Menu'

// import { StyledBurger } from './BurgerStyled'

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

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: none;
  z-index: 100;
  cursor: pointer;

  @media (max-width: 899px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.Text_Title};
    border-radius: 10px;

    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
