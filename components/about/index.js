import { AboutPage, DetailContainer, NameContainer } from "./pageStyled"
import { Data } from "../common/Data"
import Image from 'next/image'
import Img from '../common/image/me.png'

export default function About({language}){
    return <AboutPage className="DefuiltHomepage">
        <sman>{Data.about[language ? 'en' : 'nr'].subject}</sman>
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


