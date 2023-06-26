import { AboutPage, DetailContainer, NameContainer, InfoContainer, Ul, Skills, Knowledge, ButtonCV, Span } from "./pageStyled"
import { Data } from "../common/Data"
import Image from 'next/image'
import Img from '../common/image/about.jpg'


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
            Skillsssss
        </Skills>
    
        <Knowledge>
            Knowledge
        </Knowledge>

    </AboutPage>
}


