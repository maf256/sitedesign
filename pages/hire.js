import Hire from "../components/hire";

import Head from 'next/head';

export default function hire ({language}){

    return <>
        <Head>
        <   title>Webutvikler og webutvikling og webdesign & web utvikler i oslo</title>
            <meta
            name="description"
            content="web utvikler - Webdesign sandvika - webdesign oslo - webutvikler - react - Fullstack webutviklingr - Responsive- Responsiveness - wordpress - woocommerce - Responsive web design - Responsive page - Responsive webdesign - webdesign, Webshop, Programming, Wordpress, SEO, Digital marketing, Graphic design.
                webdesign webdesign design webdesign development -  webshop site web -  it consulting - programming wordpress graphic design sandvika oslo Norway bærum digitalm arketing - nettside nettside design nettside utvikling -  nettshop -  it konsulent - utvikling grafisk design digital markedsføring social marketing sosial markeds føring facebook Instagram - linkedin - SEO - CRO"
            key="desc"
            />
            <meta 
                name="keywords" content="HTML,CSS,XML,JavaScript,react,web development, responsive design, front-end development, back-end development,"
            />
            <meta name="author" content="Majid Askarifarsangi"/>
            <meta  name="robots" content=" index , follow "/>
            <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />

        </Head>
        <Hire language={language}/>
        
    </>
}