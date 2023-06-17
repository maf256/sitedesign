import styled from "styled-components"
import Image from 'next/image'
import Img from '../common/image/me.png'


export default function Home() {
  return (
    <Main >
        <div>
            <Image
                src = {Img}
                width = {500}
                height = {500}
                alt = "Majid Askarifarsangi"
                placeholder="blur"
                priority={false}
            />
        </div>
            <h1>Majid Askarifarsangi</h1>
            <p>I am a web developer</p>
            <p>I build things for the web.</p>
        <div>

        </div>
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