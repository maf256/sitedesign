import Home from "../components/home/Home";
import Head from 'next/head';
// import Icon from './favicon.png'
import Img from '../components/common/image/me.jpg'


export default function Homepage ({language}){

    const structuredData = {
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Majid Askarifarsangi",
        "image": "../components/common/image/me.png",
        "url": "https://sitedesign.no",
        "sameAs": [
          "https://www.facebook.com/majid.farsangi",
          "https://www.linkedin.com/in/farsangi/"
        ]
      };

      



    const defaultMeta = {
        title: 'Your Default Title',
        description: "Jeg er en dedikert og lidenskapelig software ingeniør med omfattende erfaring innen webutvikling. Gjennom årene har jeg jobbet som webutvikler, frontend utvikler og full stack utvikler, noe som har gitt meg en solid forståelse av alle aspekter ved webdesign og utvikling. Mitt arbeid som webutvikler har inkludert alt fra å designe brukervennlige grensesnitt til å bygge komplekse backend-systemer, noe som gjør at jeg kan levere helhetlige løsninger som oppfyller kundens behov. Webdesign er en kunstform som jeg setter stor pris på. Jeg elsker å kombinere estetikk med funksjonalitet for å skape nettsteder som ikke bare ser bra ut, men som også gir en sømløs brukeropplevelse. Som webutvikler er jeg alltid opptatt av å holde meg oppdatert med de nyeste trendene og teknologiene innen webdesign, slik at jeg kan tilby de mest moderne og effektive løsningene til mine kunder. Gjennom min karriere har jeg hatt gleden av å jobbe på en rekke spennende prosjekter. Fra små bedriftsnettsteder til store e-handelsplattformer, har jeg alltid strukket meg etter å levere høy kvalitet. Jeg tror på kraften av godt webdesign, og hvordan det kan bidra til en virksomhets suksess. Enten det handler om å forbedre brukeropplevelsen, øke konverteringsraten, eller bare å gjøre et nettsted visuelt tiltalende, er mitt mål alltid å skape noe som gir verdi. Som full stack utvikler, bringer jeg en helhetlig tilnærming til hvert prosjekt. Jeg har erfaring med en rekke teknologier og verktøy, og jeg er komfortabel med både frontend og backend utvikling. Dette gjør at jeg kan ta eierskap over hele utviklingsprosessen, fra konsept og design, til implementering og vedlikehold. Kort sagt, med min bakgrunn som webutvikler og min lidenskap for webdesign, er jeg godt rustet til å hjelpe bedrifter med å realisere sine digitale mål. Jeg ser frem til nye utfordringer og muligheter til å skape innovative og effektive løsninger.",
        url: 'https://yourwebsite.com',
        image: 'https://yourwebsite.com/default-image.jpg',
        type: 'website',
      };

    return <>
        <Head>
        <   title>Webutvikler webutvikling webdesign & web utvikler i oslo</title>
            <meta
            name="description"
            content= {defaultMeta.description}
            key="desc"
            />
            <meta 
                name="keywords" content="Webutvikler,Webutvikling,CSS,JavaScript,react,web development, responsive design, front-end development, back-end development"
            />
            <meta name="author" content="Majid Askarifarsangi"/>
            <meta  name="robots" content=" index , follow "/>
            {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png"/> */}
            <link rel="canonical" href="https://sitedesign.no" />

            <meta property="og:title" content="Webutvikler webutvikling webdesign & web utvikler i oslo" />
            <meta property="og:description" content="Webutvikler webutvikling webdesign & web utvikler i oslo" />
            <meta property="og:image" content={Img} />
            {/* <link rel="icon" type="image/x-icon" href="/favicon.png" /> */}

            <meta property="og:url" content="https://sitedesign.no" />
            {/* Optional tags */}
            <meta property="og:site_name" content="sitedeisgn" />
            <meta property="og:type" content="website" />

            {/* LinkedIn link */}
            <meta property="og:see_also" content="https://www.linkedin.com/in/farsangi/" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* ___________________________________ */}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff"></meta>
            {/* _____________________ */}
                    {/* Open Graph meta tags */}
            {/* <meta property="og:title" content={data.title} />
            <meta property="og:description" content={data.description} />
            <meta property="og:image" content={data.image} />
            <meta property="og:url" content={`https://yourwebsite.com/${data.slug}`} />
            <meta property="og:type" content="website" /> */}

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
             />
        </Head>
        <Home language={language}/>
    </>
}


