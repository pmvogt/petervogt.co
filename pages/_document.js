import { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&family=Inter:wght@300;400;500;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,600;1,900&display=swap"
        />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
