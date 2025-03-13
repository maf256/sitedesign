import Image from 'next/image'

import Img from '../common/image/webutvikler.png'
import { Data } from '../common/Data'
import * as Svg from '../common/Svg'
import { Main, Div, SocialContainer, Card } from './Home.styled.js'
import { motion } from 'framer-motion'

export default function Home({ language, theme }) {
  const langData = Data.home[language ? 'en' : 'nr']

  return (
    <>
      <Main>
        <Card as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Image
            src={Img}
            alt="Webutvikler - Majid Askarifarsangi"
            placeholder="blur"
            priority={true}
          />
        </Card>
        <Div>
          <h1>{langData.h1}</h1>
          <h2>{langData.h2}</h2>
          <h3>{langData.h3}</h3>
          <h4>{langData.h4}</h4>
          <h5>{langData.h5}</h5>
          <p>{langData.p}</p>
          <p>{langData.p1}</p>
          <SocialContainer>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/farsangi"
              aria-label="LinkedIn"
            >
              webutvikler
              <Svg.Linkedin fontSize="35px">webutvikler</Svg.Linkedin>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/maf256"
              aria-label="GitHub"
            >
              webutvikler
              <Svg.Github fontSize="35px">webutvikler</Svg.Github>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="tel:+4740189111"
              aria-label="Phone"
            >
              {' '}
              webutvikler
              <Svg.Phone fontSize="35px">webutvikler</Svg.Phone>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/+4740189111"
              aria-label="WhatsApp"
            >
              webutvikler
              <Svg.Whatsapp fontSize="35px">webutvikler</Svg.Whatsapp>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:majid@sitedesign.no"
              aria-label="Send Email to Majid"
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
