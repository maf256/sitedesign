'use client'
import Image from 'next/image'
import styled from 'styled-components'

// import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <H1>Hello world</H1>
    </main>
  )
}

const H1 = styled.h1`
  color: red;
`