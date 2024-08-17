import Home from '../components/home/Home'
import Head from 'next/head'
// import icon from '../public/'
// import img from '../components/common/image/me.jpg'
const icon = '/favicon.ico'
const img = '/me.jpg'
export default function Homepage({ language }) {
  return (
    <>
      <Head>
        <title>Webutvikler webutvikling webdesign & web utvikler i oslo</title>
        <meta
          name="description"
          content="Jeg er software ingeniør og jeg har jobbet som webutvikler og frontend utvikler og full stack utvikler."
          key="desc"
        />
        <meta
          name="keywords"
          content="Webutvikler,Webutvikling,CSS,JavaScript,react,web development, responsive design, front-end development, back-end development"
        />
        <meta name="author" content="Majid Askarifarsangi" />
        <meta name="robots" content=" index , follow " />
        <link rel="icon" type="image/png" sizes="16x16" href={icon} />
        <link rel="canonical" href="https://sitedesign.no" />

        <meta
          property="og:title"
          content="Webutvikler webutvikling webdesign & web utvikler i oslo"
        />
        <meta
          property="og:description"
          content="Webutvikler webutvikling webdesign & web utvikler i oslo"
        />
        <meta property="og:image" content={img} />
        <link rel="icon" type="image/x-icon" href={icon} />

        <meta property="og:url" content="https://sitedesign.no" />
        <meta property="og:site_name" content="sitedeisgn" />
        <meta property="og:type" content="website" />

        <meta
          property="og:see_also"
          content="https://www.linkedin.com/in/farsangi/"
        />
      </Head>
      <Home language={language} />
    </>
  )
}
