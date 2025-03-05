import styled from 'styled-components'
import Image from 'next/image'
import Img from '../common/image/webutvikler.png'
import * as Svg from '../common/Svg'
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
        <Div>
          <h1>{Data.home[language ? 'en' : 'nr'].h1}</h1>
          <h2>{Data.home[language ? 'en' : 'nr'].h2}</h2>
          <h3>{Data.home[language ? 'en' : 'nr'].h3}</h3>
          <h4>{Data.home[language ? 'en' : 'nr'].h4}</h4>
          <h5>{Data.home[language ? 'en' : 'nr'].h5}</h5>
          <p>{Data.home[language ? 'en' : 'nr'].p}</p>
          <p>{Data.home[language ? 'en' : 'nr'].p1}</p>
          <SocialContainer>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/farsangi"
            >
              webutvikler
              <Svg.Linkedin fontSize="35px">webutvikler</Svg.Linkedin>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/maf256"
            >
              webutvikler
              <Svg.Github fontSize="35px">webutvikler</Svg.Github>
            </a>
            <a target="_blank" rel="noreferrer" href="tel:+4740189111">
              {' '}
              webutvikler
              <Svg.Phone fontSize="35px">webutvikler</Svg.Phone>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/+4740189111"
            >
              webutvikler
              <Svg.Whatsapp fontSize="35px">webutvikler</Svg.Whatsapp>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:majid@sitedesign.no"
            >
              webutvikler
              <Svg.Email fontSize="45px">webutvikler</Svg.Email>
            </a>
          </SocialContainer>
        </Div>
      </Main>
    </>
  )
}

const Main = styled.main`
  background-color: ${({ theme }) => theme.BC_Home};
  color: ${({ theme }) => theme.Text_Paragraph};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  @media (min-width: 900px) {
    margin-left: 25%;
    width: 75%;
  }

  @media (max-width: 899px) {
    width: 100%;
    padding: 20px;
    padding-top: 60px;
  }
`

const Div = styled.div`
  max-width: 800px;
  text-align: center;

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 15px;
    line-height: 1.4;
  }

  h1 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.Text_Logo};
  }

  h2 {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.Text_Logo};
  }

  h3,
  h4,
  h5 {
    color: ${({ theme }) => theme.Text_Paragraph};
    font-size: 1.2rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 20px;
  }
  @media (max-width: 899px) {
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.3rem;
    }
    h3,
    h4,
    h5 {
      font-size: 1.1rem;
    }
    p {
      font-size: 1rem;
    }
  }
`

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  a {
    color: ${({ theme }) => theme.Icon_Color};
    font-size: 0;

    svg {
      width: 35px;
      height: 35px;
    }

    &:hover svg,
    &:focus svg {
      transform: scale(1.1);
    }
  }
`

const Card = styled.div`
  img {
    width: 100%;
    max-width: 450px;
    height: auto;
    border-radius: 8px;

    @media (max-width: 900px) {
      max-width: 350px;
    }

    @media (max-width: 500px) {
      max-width: 300px;
    }
  }
`
