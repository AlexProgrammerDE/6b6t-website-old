import NavBar from "./NavBar";
import SEOHeader from "./SEOHeader";
import {ReactNode, useEffect, useState} from "react";
import CookieConsent, {Cookies, getCookieConsentValue,} from "react-cookie-consent";
import * as gtagScript from '../lib/gtag'
import Script from "next/script";

interface WindowLayer {
    dataLayer: IArguments[]
}

const initGA = (id: string) => {
    const specialWindow: WindowLayer = window as unknown as WindowLayer
    specialWindow.dataLayer = specialWindow.dataLayer || [];
    const gtag: Gtag.Gtag = function gtag() {
        specialWindow.dataLayer.push(arguments);
    }
    gtag('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted'
    });
    gtag('js', new Date());
    gtag('config', id, {
        page_path: window.location.pathname,
    });
};

export default function Layout({children}: { children: ReactNode }) {
    const [crate, setCrate] = useState<any>()

    useEffect(() => {
        if (crate) return

        import("@widgetbot/crate").then((importContent) => {
            importContent.cdn().then(crateCDN => {
                const crateInstance = new crateCDN({
                    server: '917520262797344779',
                    channel: '917520263384563717',
                    color: '#000',
                    location: ['bottom', 'right']
                })

                crateInstance.notify('Click me to chat on the 6b6t discord server!')

                setCrate(crateInstance)
            })
        })
    }, [crate])

    useEffect(() => {
        const isConsent = getCookieConsentValue();
        if (isConsent === "true") {
            handleAcceptCookie();
        }
    }, []);

    const handleDeclineCookie = () => {
        // Remove Google Analytics cookies
        Cookies.remove("_ga");
        Cookies.remove("_gat");
        Cookies.remove("_gid");
    };

    const handleAcceptCookie = () => {
        if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) {
            initGA(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID);
        }
    };

    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtagScript.GA_TRACKING_ID}`}
            />
            <SEOHeader/>
            <div className="min-h-screen h-full flex flex-col">
                <NavBar/>
                <main className="flex-grow container clearfix">
                    <div className="content">
                        <article className="article animated slideInUp">
                            {children}
                        </article>
                    </div>
                </main>
                <footer className="flex-shrink flex flex-row">
                    <div className="flex flex-col justify-end">
                        <div className="bg-black p-1.5 text-sm">
                            <p>Map render by Agent Smith#9660</p>
                        </div>
                    </div>
                </footer>
                <CookieConsent
                    containerClasses="pr-24"
                    enableDeclineButton
                    onAccept={handleAcceptCookie}
                    onDecline={handleDeclineCookie}
                >
                    This website uses cookies to enhance the user experience.
                </CookieConsent>
            </div>
        </>
    )
}
