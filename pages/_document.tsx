import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content="ivanrl.dev" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="ivanrl.dev" />
          <meta
            name="description"
            content="Ivan Roldan Lusich personal blog and website."
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/static/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-tap-highlight" content="no" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="icon/favicon.png" />
          <link rel="apple-touch-icon" href="icon/appleTouchIcon.png" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Ivan Roldan Lusich personal website. You can find his projects, skills and blogs here."
          />

          <meta
            name="twitter:card"
            content="Ivan Roldan Lusich personal blog and website."
          />
          <meta name="twitter:url" content="https://ivanrl.dev" />
          <meta name="twitter:title" content="ivanrl.dev" />
          <meta
            name="twitter:description"
            content="Ivan Roldan Lusich personal website. You can find his projects, skills and blogs here."
          />
          <meta
            name="twitter:image"
            content="https://yourdomain.com/static/icons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@ivanrl_dev" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Iván Roldán Lusich" />
          <meta
            property="og:description"
            content="Ivan Roldan Lusich personal blog and website."
          />
          <meta property="og:site_name" content="ivanrl.dev" />
          <meta property="og:url" content="https://ivanrl.dev" />
          <meta
            property="og:image"
            content="https://ivanrl.dev/icon/appleTouchIcon.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
