import Home from "../components/home/Home";
import Head from 'next/head';

export default function Homepage ({language}){

    return <>
        <Head>
        <   title>Webutvikler</title>
            <meta
            name="description"
            content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
            key="desc"
            />
        </Head>
        <Home language={language}/>
    </>
}