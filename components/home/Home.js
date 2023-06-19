import styled from "styled-components"
import Image from 'next/image'
import Img from '../common/image/me.png'
import {Phone, Email, FaceBook, Twitter, Linkedin, Github, Whatsapp, Business} from '../common/Svg'
import Head from 'next/head';




export default function Home() {
  return (
    <>
      <Head>
        <title>Webutvikler</title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      <Main >
          <div>
              <Image
                  src = {Img}
                  width = {250}
                  height = {250}
                  alt = "Majid Askarifarsangi"
                  placeholder="blur"
                  priority={false}
                  loading = 'lazy'
              />
          </div>
          <div>
              <H1>Majid Askarifarsangi</H1>
              <p>I am a web developer</p>
              <p>I build things for the web.</p>
              <SosialConteiner>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/farsangi'><Linkedin fontSize="20px" /></a>
                <a target="_blank" rel="noreferrer" href='https://github.com/maf256'><Github fontSize="20px" /></a>
                <a target="_blank" rel="noreferrer"  href="tel:+4740882869"> <Phone fontSize="20px" /></a>
                <a target="_blank" rel="noreferrer"  href="https://wa.me/+4740882869"><Whatsapp fontSize="20px" /></a>
                <a target="_blank" rel="noreferrer"  href="mailto:info@sitedesign.no"><Email fontSize="20px" /></a>
              </SosialConteiner>
          </div>
      </Main>
    </>
  )
}


const Main = styled.main`
  background-color: ${({theme}) => theme.BC_Home};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 900px) {
    margin-left: 25%;
    width: 75%;

  }
  @media (max-width: 899px) {
    width: 100%;
    flex-direction: column;
    padding: 50px;
  }
  div {
    margin: 5%;
    h1 {
      margin: 20px 0px;
      font-size: 45px;
    }
    p {
      margin: 10px 0px;
      color: ${({theme}) => theme.Text_Paragraph};
      font-size: 20px;

    }
  }
  img {
    border-radius: 50%;
  }
`


const H1 = styled.h1`
  color: ${({theme}) => theme.Text_Title};
`

const SosialConteiner = styled.span`
  display: flex;
  align-items: center;
  margin: 20px 0px;

`