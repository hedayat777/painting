import React, {FC} from 'react';
import {ConfigProvider} from 'antd';
import "../styles/app.less";
import "../styles/general.scss";
import "../styles/antd.less";
import type {AppProps /*, AppContext */} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
    return <ConfigProvider direction="rtl">
        <Component {...pageProps} />
    </ConfigProvider>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp