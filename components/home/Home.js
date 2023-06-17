import styled from "styled-components"

export default function Home() {
  return (
    <Main >

      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
      <H1>Hello world</H1>
    </Main>
  )
}


const Main = styled.main`
  background-color: #ededed;
  min-height: 100vh;
  @media (min-width: 900px) {
    margin-left: 25%;
    width: 75%;

  }
  @media (max-width: 899px) {
    width: 100%;
  }
`


const H1 = styled.h1`
  color: red;
`