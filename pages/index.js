import Home from "../components/home/Home";
import Head from 'next/head';
// import Icon from './favicon.png'
import Img from '../components/common/image/me.jpg'


export default function Homepage ({language}){
    const structuredData = {
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Majid Askarifarsangi",
        "image": "../components/common/image/me.jpg",
        "url": "https://sitedesign.no",
        "sameAs": [
          "https://www.facebook.com/majid.farsangi",
          "https://www.linkedin.com/in/farsangi/"
        ]
      };

    return <>
        <Head>
        <   title>Webutvikler webutvikling webdesign & web utvikler i oslo</title>
            <meta
            name="description"
            content="Jeg er software ingeniør og jeg har jobbet som webutvikler og frontend utvikler og full stack utvikler."
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
             />
        </Head>
        <Home language={language}/>
    </>
}


