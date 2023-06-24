import Contact from "../components/contact";

import Head from 'next/head';

export default function about ({language}){

    return <>
        <Head>
        <   title>Webutvikler</title>
            <meta
            name="description"
            content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
            key="desc"
            />
        </Head>
        <Contact language={language}/>
    </>
}