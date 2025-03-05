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
    font-size: 2rem;
    color: ${({ theme }) => theme.Text_Logo};
  }

  h2 {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.Text_Logo};
  }

  h3,
  h4,
  h5 {
    color: ${({ theme }) => theme.Text_Paragraph};
    font-size: 1.1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 20px;
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

const DetailContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.Border_Color};
  border-bottom: 1px solid ${({ theme }) => theme.Border_Color};
  padding: 20px 0;

  p {
    font-size: 1rem;
    line-height: 1.7;
  }

  @media (max-width: 500px) {
    padding: 15px 0;
  }
`

// const Main = styled.main`
//   background-color: ${({ theme }) => theme.BC_Home};
//   min-height: 100vh;
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   @media (min-width: 900px) {
//     margin-left: 25%;
//     width: 75%;
//   }
//   @media (max-width: 899px) {
//     width: 100%;
//     flex-direction: column;
//     padding: 30px;
//   }
// `
// const Div = styled.div`
//   h1 {
//     margin: 20px 0px;
//     font-size: 35px;
//     color: ${({ theme }) => theme.Text_Logo};
//   }
//   h2 {
//     margin: 20px 0px;
//     font-size: 25px;
//     color: ${({ theme }) => theme.Text_Logo};
//   }
//   h3 {
//     margin: 10px 0px;
//     color: ${({ theme }) => theme.Text_Paragraph};
//     font-size: 18px;
//   }
//   h4,
//   h5 {
//     margin: 10px 0px;
//     color: ${({ theme }) => theme.Text_Paragraph};
//     font-size: 15px;
//   }
// `

// const SosialConteiner = styled.span`
//   margin: 20px;
//   width: 300px;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   a {
//     color: transparent;
//     font-size: 0px;
//   }
// `
// const Card = styled.div`
//   padding: 20px;
//   img {
//     width: 450px;
//     height: auto;
//     @media (max-width: 1300px) {
//       width: 350px;
//       height: auto;
//     }
//     @media (max-width: 899px) {
//       width: 500px;
//       height: auto;
//     }
//     @media (max-width: 500px) {
//       width: 400px;
//       height: auto;
//     }
//   }
// `

// export const DetailContainer = styled.div`
//   border-top: solid 1px ${({ theme }) => theme.Text_Paragraph};
//   border-bottom: solid 1px ${({ theme }) => theme.Text_Paragraph};
//   margin: 0px 10px;
//   @media (max-width: 500px) {
//     margin: 0px 0px;
//   }
//   p {
//     margin: 20px 0px;
//     color: ${({ theme }) => theme.Text_Paragraph};
//     line-height: 1.6;
//     font-size: 18px;
//   }
// `
