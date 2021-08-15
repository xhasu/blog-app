import Head from 'next/head';
import BaseLayout from 'components/layouts/base';

function MyApp({ Component, pageProps }) {
  return (
    <BaseLayout>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </BaseLayout>
  );
}

export default MyApp;
