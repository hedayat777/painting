import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from "react";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
                    <meta name=" theme-color" content="#ffcc00"/>
                    <link rel="shortcut icon" href="/images/favicon.ico" />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>

            </Html>
        )
    }
}

export default MyDocument
