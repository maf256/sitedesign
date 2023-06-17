"use client"
import { useState, useRef, useEffect } from "react"
import Menu from "./Menu"
import { StyledBurger } from './BurgerStyled'

export default function Burger({selectedLanguage, setSelectedLanguage}) {
    const [open, setOpen] = useState(false)
    const navbarRef = useRef(null)
    useEffect(()=> {
        if (open){
            const listener = e => {
                if (navbarRef.current && e.target !== navbarRef.current && !navbarRef.current.contains(e.target)){
                    setOpen(false)
                }
            }
            window.addEventListener("click", listener)
            return ()=> {
                window.removeEventListener("click", listener)
            }    
        }
    }, [open])

    return (
        <div ref={navbarRef}>
            <StyledBurger open={open} onClick={() => setOpen(!open) }>
                <div></div>
                <div></div>
                <div></div>
            </StyledBurger>
            <Menu selectedLanguage={selectedLanguage} open={open} setSelectedLanguage={setSelectedLanguage}/> 
        </div>
    )
}
