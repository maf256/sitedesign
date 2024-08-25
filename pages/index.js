import Home from '../components/home/Home'
import Head from 'next/head'
// import icon from '../public/'
// import img from '../components/common/image/me.jpg'

export default function Homepage({ language }) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://sitedesign.no',
    name: 'Sitedesign',
    description:
      'Sitedesign offers professional webutvikler (web development) and webdesign (web design) services tailored to your business needs.',
    author: {
      '@type': 'Person',
      name: 'Majid Askarifarsangi',
      jobTitle: 'Webutvikler',
      image: 'https://sitedesign.no/webutvikler.jpg',
      url: 'https://www.sitedesign.no',
      sameAs: [
        'https://www.facebook.com/majid.farsangi',
        'https://www.linkedin.com/in/farsangi',
        'https://x.com/askarifarsangi',
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sitedesign',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sitedesign.no/webutvikler.jpg',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://sitedesign.no/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://sitedesign.no',
    },
  }

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Sitedesign',
    url: 'https://sitedesign.no',
    description:
      'Sitedesign specializes in webutvikler (web development) and webdesign (web design) services in Norway.',
    logo: 'https://sitedesign.no/android-chrome-192x192.png',
    image: 'https://sitedesign.no/webutvikler.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hamangskogen 71',
      addressLocality: 'Sandvika',
      postalCode: '1338',
      addressCountry: 'NO',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+47-401-89-111',
      contactType: 'Customer Service',
      areaServed: 'NO',
      availableLanguage: ['Norwegian', 'English'],
    },
    sameAs: [
      'https://www.facebook.com/majid.farsangi',
      'https://www.linkedin.com/in/farsangi',
      'https://x.com/askarifarsangi',
    ],
    priceRange: '$$',
    keywords: 'webutvikler, webdesign, web development, web design, Norway',
  }
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://sitedesign.no/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://sitedesign.no/about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Contact',
        item: 'https://sitedesign.no/contact',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Booking',
        item: 'https://sitedesign.no/booking',
      },
    ],
  }
  return (
    <>
      <Head>
        <title>
          Webutvikler - oslo webdesign - webutvikling - webdesign - oslo
          webutvikler
        </title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <meta
          name="description"
          content="Erfaren softwareingeniør og webutvikler med spisskompetanse innen frontend- og full stack utvikling, samt moderne webdesign. Leverer skreddersydde digitale løsninger som kombinerer funksjonalitet med estetikk."
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
