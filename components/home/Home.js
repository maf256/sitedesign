import styled from 'styled-components'
import Image from 'next/image'
import Img from '../common/image/me.png'
import { Phone, Email, Linkedin, Github, Whatsapp } from '../common/Svg'
import { Data } from '../common/Data'

export default function Home({ language, theme }) {
  return (
    <>
      <Main>
        <Card>
          <Image
            src={Img}
            alt="webutvikler"
            placeholder="blur"
            priority={false}
          />
        </Card>
        <div>
          <H2>{Data.home[language ? 'en' : 'nr'].name}</H2>
          <h3>
            {Data.home[language ? 'en' : 'nr'].subject}{' '}
            <b>{Data.about[language ? 'en' : 'nr'].h2}</b>.
          </h3>
          <h3>{Data.home[language ? 'en' : 'nr'].text2}</h3>
          <SosialConteiner>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/farsangi"
            >
              <Linkedin fontSize="35px" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/maf256"
            >
              <Github fontSize="35px" />
            </a>
            <a target="_blank" rel="noreferrer" href="tel:+4740189111">
              {' '}
              <Phone fontSize="35px" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/+4740189111"
            >
              <Whatsapp fontSize="35px" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:majid@sitedesign.no"
            >
              <Email fontSize="45px" />
            </a>
          </SosialConteiner>
        </div>

        <DetailContainer>
          <p>{Data.about[language ? 'en' : 'nr'].txt1}</p>
          <p>{Data.about[language ? 'en' : 'nr'].txt2}</p>
          <p>{Data.about[language ? 'en' : 'nr'].txt3}</p>
          <p>{Data.about[language ? 'en' : 'nr'].txt4}</p>
          <p>
            {Data.about[language ? 'en' : 'nr'].txt5}
            <strong>webutvikler</strong>
            {Data.about[language ? 'en' : 'nr'].txt6}
          </p>
        </DetailContainer>
      </Main>
    </>
  )
}

const Main = styled.main`
  background-color: ${({ theme }) => theme.BC_Home};
  min-height: 100vh;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (min-width: 900px) {
    margin-left: 25%;
    width: 75%;
  }
  @media (max-width: 899px) {
    width: 100%;
    flex-direction: column;
    padding: 30px;
  }
  div {
    h2 {
      margin: 20px 0px;
      font-size: 45px;
      color: ${({ theme }) => theme.Text_Logo};
    }
    h3 {
      margin: 10px 0px;
      color: ${({ theme }) => theme.Text_Paragraph};
      font-size: 18px;
    }
  }
`

const H2 = styled.h2`
  color: ${({ theme }) => theme.Text_Title};
`

const SosialConteiner = styled.span`
  margin: 20px;
  width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Card = styled.div`
  img {
    width: 550px;
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
`

export const DetailContainer = styled.div`
  border-top: solid 1px ${({ theme }) => theme.Text_Paragraph};
  border-bottom: solid 1px ${({ theme }) => theme.Text_Paragraph};
  margin: 0px 10px;
  @media (max-width: 500px) {
    margin: 0px 0px;
  }
  p {
    margin: 20px 0px;
    color: ${({ theme }) => theme.Text_Paragraph};
    line-height: 1.6;
    font-size: 18px;
  }
`
