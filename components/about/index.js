import { AboutPage, DetailContainer, NameContainer, InfoContainer, Ul, Skills, Knowledge, ButtonCV, Span } from "./pageStyled"
import { Data } from "../common/Data"
import Image from 'next/image'
import Img from '../common/image/me.png'


export default function About({language}){
    return <AboutPage className="DefuiltHomepage">
        <Span>{Data.about[language ? 'en' : 'nr'].subject}</Span>
        <h1>{Data.about[language ? 'en' : 'nr'].subject}</h1>
        <Image
            src = {Img}
            alt = "Majid Askarifarsangi"
            placeholder="blur"
            priority={false}
            loading = 'lazy'
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
                    <span >{item.name}</span>
                    <span >{item.data}</span>
                </li>
                ))}
            </Ul>
        </InfoContainer>
        <ButtonCV href="https://docs.google.com/document/d/1CnW2JXswDhA3hJBSsXhzZ98TOPY6wbgO/edit?usp=sharing&ouid=109271537866387535039&rtpof=true&sd=true"             target="_blank"
            rel="noreferrer">{Data.about[language ? 'en' : 'nr'].buttonName}</ButtonCV>
        <Skills>
            Skillsssss
        </Skills>
    
        <Knowledge>

        </Knowledge>


        
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
    </AboutPage>
}


