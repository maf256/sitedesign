import styled, { keyframes } from 'styled-components';
import Image from 'next/image'
import Img from '../common/image/me.png'
import { Phone, Email, Linkedin, Github, Whatsapp } from '../common/Svg'
import { Data } from '../common/Data';

export default function Home({language, theme}) {
  return (
    <>
      <Main >
          <Card>
              <Image
                src = {Img}
                alt = "webutvikler"
                placeholder="blur"
                priority={false}
              />
          </Card>
          <div>
              <H2>{Data.home[language ? 'en' : 'nr'].name}</H2>
              <h3>{Data.home[language ? 'en' : 'nr'].subject}</h3>
              <h3>{Data.home[language ? 'en' : 'nr'].text2}</h3>
              <SosialConteiner>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/farsangi'><Linkedin fontSize="35px"/></a>
                <a target="_blank" rel="noreferrer" href='https://github.com/maf256'><Github fontSize="35px" /></a>
                <a target="_blank" rel="noreferrer"  href="tel:+4740189111"> <Phone fontSize="35px"/></a>
                <a target="_blank" rel="noreferrer"  href="https://wa.me/+4740189111"><Whatsapp fontSize="35px" /></a>
                <a target="_blank" rel="noreferrer"  href="mailto:majid@sitedesign.no"><Email fontSize="45px" /></a>
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
    h2 {
      margin: 20px 0px;
      font-size: 45px;
      color: ${({theme}) => theme.Text_Logo};
    }
    h3 {
      margin: 10px 0px;
      color: ${({theme}) => theme.Text_Paragraph};
      font-size: 18px;
    }
  }
`


const H2 = styled.h2`
  color: ${({theme}) => theme.Text_Title};
`

const SosialConteiner = styled.span`
  margin-top: 20px;
  width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Card = styled.div`
  img {
    width: 500px;
    height: auto;
    @media (max-width: 1300px) {
      width: 350px;
      height: auto;
    }
    @media (max-width: 899px) {
      width: 500px;
      height: auto;
    }
          @media (max-width: 500px) {
      width: 400px;
      height: auto;
    }
  }
`;
