import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&family=Inter:wght@300;400;500;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,600;1,900&display=swap'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
