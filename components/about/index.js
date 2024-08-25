import {
  AboutPage,
  NameContainer,
  InfoContainer,
  Ul,
  Knowledge,
  ButtonCV,
  Span,
  UlKnowledge,
  EducationContainer,
  Education,
  UlKnowledgeDiv,
  UlEducation,
} from './pageStyled'
import { Data } from '../common/Data'
import Image from 'next/image'
import Img from '../common/image/about.jpg'
import { Play } from '../common/Svg'

export default function About({ language }) {
  return (
    <AboutPage className="DefuiltHomepage">
      <Span>{Data.about[language ? 'en' : 'nr'].subject}</Span>
      <h2>{Data.about[language ? 'en' : 'nr'].subject}</h2>
      <Image
        src={Img}
        alt="Majid Askarifarsangi"
        placeholder="blur"
        priority={false}
        // loading = 'lazy'
      />
      <NameContainer>
        <h2>{Data.home[language ? 'en' : 'nr'].name}</h2>
        <h3>{Data.about[language ? 'en' : 'nr'].h2}</h3>
      </NameContainer>
      <InfoContainer>
        <Ul>
          {Data.about[language ? 'en' : 'nr'].info.map((item, inx) => (
            <li key={inx}>
              <h5>{item.name}: </h5>
              <p>{item.data}</p>
            </li>
          ))}
        </Ul>
      </InfoContainer>
      <ButtonCV
        href="https://drive.google.com/file/d/1LH8DtEQhVBq8GLEC6nQfbg8ed0gfE1a6/view"
        target="_blank"
        rel="noreferrer"
      >
        {Data.about[language ? 'en' : 'nr'].buttonName}
      </ButtonCV>
      {/* <Skills>

        </Skills> */}

      <EducationContainer>
        <Education>
          <h2>{Data.about[language ? 'en' : 'nr'].educationTitlle}</h2>
          <UlEducation>
            {Data.about[language ? 'en' : 'nr'].education.map(
              ({ date, name, uni }, inx) => (
                <li key={inx}>
                  <span></span>
                  <h5>{date}</h5>
                  <div>
                    <h3>{name}</h3>
                    <h4>{uni}</h4>
                  </div>
                </li>
              ),
            )}
          </UlEducation>
        </Education>
        <Education>
          <h2>{Data.about[language ? 'en' : 'nr'].experienceTitlle}</h2>
          <UlEducation>
            {Data.about[language ? 'en' : 'nr'].experience.map(
              ({ date, name, uni }, inx) => (
                <li key={inx}>
                  <span></span>
                  <h5>{date}</h5>
                  <div>
                    <h3>{name}</h3>
                    <h4>{uni}</h4>
                  </div>
                </li>
              ),
            )}
          </UlEducation>
        </Education>
      </EducationContainer>
      <UlKnowledgeDiv>
        <h2>{Data.about[language ? 'en' : 'nr'].knowledge.knowledge}</h2>
        <Knowledge>
          <UlKnowledge>
            <h4>Frontend</h4>
            {Data.about[language ? 'en' : 'nr'].knowledge.frontend.map(
              (item, inx) => (
                <li key={inx}>
                  <span>
                    <Play fontSize="15px" />
                  </span>
                  <h5>{item}</h5>
                </li>
              ),
            )}
          </UlKnowledge>
          <UlKnowledge>
            <h4>Backend</h4>
            {Data.about[language ? 'en' : 'nr'].knowledge.backend.map(
              (item, inx) => (
                <li key={inx}>
                  <span>
                    <Play fontSize="15px" />
                  </span>
                  <h5>{item}</h5>
                </li>
              ),
            )}
          </UlKnowledge>
        </Knowledge>
      </UlKnowledgeDiv>
    </AboutPage>
  )
}
