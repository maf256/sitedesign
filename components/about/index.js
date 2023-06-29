import { AboutPage, DetailContainer, NameContainer, InfoContainer, Ul, Skills, Knowledge, ButtonCV, Span, UlKnowledge,EducationContainer ,Education,UlKnowledgeDiv, UlEducation } from "./pageStyled"
import { Data } from "../common/Data"
import Image from 'next/image'
import Img from '../common/image/about.jpg'
import { Play } from "../common/Svg"


export default function About({language}){
    return <AboutPage className="DefuiltHomepage">
        <Span>{Data.about[language ? 'en' : 'nr'].subject}</Span>
        <h1>{Data.about[language ? 'en' : 'nr'].subject}</h1>
        <Image
            src = {Img}
            alt = "Majid Askarifarsangi"
            placeholder="blur"
            priority={false}
            // loading = 'lazy'
        />
        <NameContainer>
            <h1>{Data.home[language ? 'en' : 'nr'].name}</h1>
            <h2>{Data.about[language ? 'en' : 'nr'].h2}</h2>
        </NameContainer>
        <DetailContainer>
            <p>{Data.about[language ? 'en' : 'nr'].txt1}</p>
            <p>{Data.about[language ? 'en' : 'nr'].txt2}</p>
        </DetailContainer>
        <InfoContainer>
            <Ul>
                {Data.about[language ? 'en' : 'nr'].info.map((item, inx) => (
                <li key={inx}>
                    <h5 >{item.name}: </h5>
                    <p >{item.data}</p>
                </li>
                ))}
            </Ul>
        </InfoContainer>
        <ButtonCV href="https://drive.google.com/file/d/1RtC5U3ETIRiphO3xkXUMxDDE-AQ_bg95/view?usp=sharing" 
            target="_blank"
            rel="noreferrer">{Data.about[language ? 'en' : 'nr'].buttonName}
        </ButtonCV>
        <Skills>

        </Skills>
        <UlKnowledgeDiv>
            <h1>{Data.about[language ? 'en' : 'nr'].knowledge.knowledge}</h1>
            <Knowledge>
                <UlKnowledge>
                <h4>Frontend</h4>
                    {Data.about[language ? 'en' : 'nr'].knowledge.frontend.map((item, inx) => (
                    <li key={inx}>
                        <span><Play fontSize="15px"  /></span>
                        <h5 >{item}</h5>
                    </li>
                    ))}
                </UlKnowledge>
                <UlKnowledge>
                    <h4>Backend</h4>
                    {Data.about[language ? 'en' : 'nr'].knowledge.backend.map((item, inx) => (
                    <li key={inx}>
                        <span><Play fontSize="15px"  /></span>
                        <h5 >{item}</h5>
                    </li>
                    ))}
                </UlKnowledge>
            </Knowledge>
        </UlKnowledgeDiv>

        <EducationContainer>
            <Education>
                <h1>{Data.about[language ? 'en' : 'nr'].educationTitlle}</h1>
                <UlEducation>
                    {Data.about[language ? 'en' : 'nr'].education.map(({date, name, uni}, inx) => (
                    <li key={inx}>
                        <span></span>
                        {/* <span><Play fontSize="15px"  /></span> */}
                        <h5>{date}</h5>
                        <div>
                            <h3>{name}</h3>
                            <h4>{uni}</h4>
                        </div>
                    </li>
                    ))}
                </UlEducation>

            </Education>

        </EducationContainer>

    </AboutPage>
}


