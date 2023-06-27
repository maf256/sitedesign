import About from "../components/about";

import Head from 'next/head';

export default function about ({language}){

    return <>
        <Head>
        <   title>Webutvikler</title>
            <meta
            name="description"
            content="web utvikler - Webdesign sandvika- webdesign oslo - webutvikler - react - motion designer - web nod - webdesigns templates - Responsive- Responsiveness - wordpress - woocommerce - Responsive web design - Responsive page - Responsive webdesign - webdesign, Webshop, Programming, Wordpress, SEO, Digital marketing, Graphic design.
                webdesign webdesign design webdesign development -  webshop site web -  it consulting - programming wordpress graphic design sandvika oslo Norway bærum digitalm arketing - nettside nettside design nettside utvikling -  nettshop -  it konsulent - utvikling grafisk design digital markedsføring social marketing sosial markeds føring facebook Instagram - linkedin - SEO - CRO"
            key="desc"
            />
            <meta 
                name="keywords" content="webutvikler, HTML ,CSS ,XML ,JavaScript ,react ,web development, responsive design, front-end development, back-end development,"
            />
            <meta name="author" content="Majid Askarifarsangi"/>
            <meta  name="robots" content=" index , follow "/>
        </Head>
        <About language={language}/>
    </>
}