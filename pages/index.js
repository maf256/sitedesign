import Home from '../components/home/Home'
import Head from 'next/head'
import { SEO } from '../styles/SEO'

export default function Homepage({ language }) {
  const seoData = SEO.homepage

  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://sitedesign.no',
    name: 'Sitedesign',
    description: seoData.description,
    author: {
      '@type': 'Person',
      name: 'Majid Askarifarsangi',
      jobTitle: 'Webutvikler',
      image: seoData.structuredData.image,
      url: 'https://sitedesign.no',
      sameAs: seoData.structuredData.sameAs,
    },
  }

  const personStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Majid Askarifarsangi',
    url: 'https://sitedesign.no',
    image: seoData.structuredData.image,
    jobTitle: 'Webutvikler',
    address: seoData.structuredData.address,
    sameAs: seoData.structuredData.sameAs,
  }

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="author" content="Majid Askarifarsangi" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph SEO tags */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.structuredData.image} />
        <meta property="og:url" content="https://sitedesign.no" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language ? 'en_US' : 'nb_NO'} />
        <meta property="og:site_name" content="Sitedesign" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://sitedesign.no" />

        {/* Structured Data (LocalBusiness) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoData.structuredData),
          }}
        />

        {/* Structured Data (WebSite) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />

        {/* Structured Data (Person) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home language={language} />
    </>
  )
}
