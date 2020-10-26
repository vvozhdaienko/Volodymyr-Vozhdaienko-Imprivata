import React from 'react';
import {Html, Main, NextScript} from 'next/document';
import Head from "next/head";

export default function MyDocument () {
    return (
        <Html lang="en">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}