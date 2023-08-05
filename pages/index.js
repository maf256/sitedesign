import Home from "../components/home/Home";
import Head from 'next/head';
import Icon from './favicon.png'

export default function Homepage ({language}){

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
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png"/>
        </Head>
        <Home language={language}/>
    </>
}


