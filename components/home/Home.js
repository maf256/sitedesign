import styled, { keyframes } from 'styled-components';
import Image from 'next/image'
import Img from '../common/image/me.jpg'
import { Phone, Email, Linkedin, Github, Whatsapp } from '../common/Svg'
import { Data } from '../common/Data';

export default function Home({language, theme}) {
  return (
    <>
      <Main >
          <Card>
              <Image
                src = {Img}
                alt = "Majid Askarifarsangi"
                placeholder="blur"
                priority={false}
                // loading = 'lazy'
              />

          </Card>
          <div>
              <H1>{Data.home[language ? 'en' : 'nr'].name}</H1>
              <h3>{Data.home[language ? 'en' : 'nr'].subject}</h3>
              {/* <h3>{Data.home[language ? 'en' : 'nr'].text1}</h3> */}
              <h3>{Data.home[language ? 'en' : 'nr'].text2}</h3>
              <SosialConteiner>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/farsangi'><Linkedin fontSize="25px"/></a>
                <a target="_blank" rel="noreferrer" href='https://github.com/maf256'><Github fontSize="25px" /></a>
                <a target="_blank" rel="noreferrer"  href="tel:+4740882869"> <Phone fontSize="25px" /></a>
                <a target="_blank" rel="noreferrer"  href="https://wa.me/+4740882869"><Whatsapp fontSize="25px" /></a>
                <a target="_blank" rel="noreferrer"  href="mailto:majid@sitedesign.no"><Email fontSize="25px" /></a>
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
  img {
    border-radius: 50%;
    width: 250px;
    height: 250px;
  }
`


const H1 = styled.h2`
  color: ${({theme}) => theme.Text_Title};
`

const SosialConteiner = styled.span`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`


const animateBorder = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Card = styled.div`
  /* position: relative;
  width: 260px;
  height: 260px;
  color: #fff;
  background: transparent;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1em;
  border-radius: 50%;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 5px solid rgba(255, 49, 49, 0.5);
    border-right: 5px solid rgba(0, 255, 255, 0.5);
    border-bottom: 5px solid rgba(57, 255, 20, 0.5);
    border-left: 5px solid rgba(255, 255, 113, 0.5);
    border-radius: 50%;
    animation: ${animateBorder} 3s linear infinite;
  } */
`;
