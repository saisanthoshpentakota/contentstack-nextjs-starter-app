import 'nprogress/nprogress.css';
import '../styles/third-party.css';
import '../styles/style.css';
import 'react-loading-skeleton/dist/skeleton.css';
import '@contentstack/live-preview-utils/dist/main.css';

import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

import { Props } from '../typescript/pages';
import Home from './';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp(props: Props) {
  const metaData = (seo: any) => {
    const metaArr = [];
    for (const key in seo) {
      if (seo.enable_search_indexing) {
        metaArr.push(
          <meta
            name={key.includes('meta_') ? key.split('meta_')[1].toString() : key.toString()}
            content={seo[key].toString()}
            key={key}
          />
        );
      }
    }
    return metaArr;
  };

  return (
    <>
      <Head>
        <meta name="application-name" content="Contentstack-Nextjs-Starter-App" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1" />
        <meta name="theme-color" content="#317EFB" />
        <title>Contentstack-Nextjs-Starter-App</title>
      </Head>
      <Home />
    </>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  return {};
};

export default MyApp;
