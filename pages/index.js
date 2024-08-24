import Home from '../components/home/Home'
import Head from 'next/head'
// import icon from '../public/'
// import img from '../components/common/image/me.jpg'

export default function Homepage({ language }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Webutvikler - oslo webdesign - webutvikling',
    datePublished: '2024-08-24',
    author: {
      '@type': 'Person',
      name: 'Majid Askarifarsangi',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sitedesign.no',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sitedesign.no/me.jpg',
      },
    },
  }
  return (
    <>
      <Head>
        <title>Webutvikler - oslo webdesign - webutvikling</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta
          name="description"
          content="Jeg er software ingeniør og har jobbet som webutvikler, frontend utvikler, full stack utvikler, og med webdesign."
          key="desc"
        />
        <meta
          name="keywords"
          content="Webutvikler,Webutvikling,CSS,JavaScript,react,web development, responsive design, front-end development, back-end development"
        />
        <meta name="author" content="Majid Askarifarsangi" />
        <meta name="robots" content=" index , follow " />
        {/* <link rel="icon" type="image/png" sizes="16x16" href={icon} /> */}
        <meta
          property="og:image"
          content="https://sitedesign.no/android-chrome-192x192.png"
        />
        <meta property="og:image:width" content="192" />
        <meta property="og:image:height" content="192" />
        <meta property="og:image:type" content="image/png" />
        <link rel="canonical" href="https://sitedesign.no" />

        <meta
          property="og:title"
          content="Webutvikler webutvikling webdesign & web utvikler i oslo"
        />
        <meta
          property="og:description"
          content="Webutvikler webutvikling webdesign & web utvikler i oslo"
        />
        {/* <meta property="og:image" content={img} /> */}
        <link rel="icon" type="image/x-icon" href={'../public/favicon.ico'} />

        <meta property="og:url" content="https://sitedesign.no" />
        <meta property="og:site_name" content="webutvikler" />
        <meta property="og:locale" content="nb_NO" />
        <meta property="og:type" content="website" />

        <meta
          property="og:see_also"
          content="https://www.linkedin.com/in/farsangi/"
        />
        <meta name="rating" content="general" />
      </Head>
      <Home language={language} />
    </>
  )
}
