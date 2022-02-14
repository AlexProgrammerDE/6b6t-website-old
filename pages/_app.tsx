import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {useEffect} from "react";
import {useRouter} from "next/router";
import * as gtag from '../lib/gtag'

function App({Component, pageProps}: AppProps) {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            gtag.pageView(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return <Component {...pageProps} />
}

// noinspection JSUnusedGlobalSymbols
export default App
