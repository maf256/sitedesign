'use client'
import styled from 'styled-components'

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 20px;
  right: 20px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 110;

  @media (max-width: 899px) {
    display: flex;
  }

  div {
    height: 3px;
    background-color: ${({ theme }) => theme.Text_Title};
    border-radius: 5px;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:nth-child(1) {
      transform: ${({ open }) =>
        open ? 'rotate(45deg) translate(7px, 7px)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }
    &:nth-child(3) {
      transform: ${({ open }) =>
        open ? 'rotate(-45deg) translate(6px, -6px)' : 'rotate(0)'};
    }
  }
`

// export const StyledBurger = styled.div`
//     width: 2rem;
//     height: 2rem;
//     position: fixed;
//     top: 15px;
//     right: 20px;
//     display: none;
//     z-index: 100;
//     cursor: pointer;

//     @media (max-width: 899px){
//         display: flex;
//         justify-content: space-around;
//         flex-flow: column  nowrap;
//     }
//     div {
//         width: 2rem;
//         height: 0.25rem;
//         background-color: ${({theme}) => theme.Text_Title};
//         border-radius: 10px;

//         transform-origin: 1px;
//         transition: all 0.3s linear;
//         &:nth-child(1) {
//         transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
//         }

//         &:nth-child(2) {
//         transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
//         opacity: ${({ open }) => open ? 0 : 1};
//         }

//         &:nth-child(3) {
//         transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
//         }
//     }

// `
