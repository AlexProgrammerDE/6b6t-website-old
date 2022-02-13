// noinspection JSUnresolvedLibraryURL

import Script from "next/script";
import NavBar from "./NavBar";
import SEOHeader from "./SEOHeader";
import {ReactNode, useEffect} from "react";
import CookieConsent, {
    getCookieConsentValue,
    Cookies,
} from "react-cookie-consent";
import * as ReactGA from "react-ga";

const initGA = (id: string) => {
    if (process.env.VERCEL_ENV === "production") {
        ReactGA.initialize(id);
    }
};

export default function Layout({children}: {children: ReactNode}) {
    useEffect(() => {
        const isConsent = getCookieConsentValue();
        if (isConsent === "true") {
            handleAcceptCookie();
        }
    }, []);

    const handleDeclineCookie = () => {
        //remove Google Analytics cookies
        Cookies.remove("_ga");
        Cookies.remove("_gat");
        Cookies.remove("_gid");
    };

    const handleAcceptCookie = () => {
        if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
            initGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
        }
    };

    return (
        <>
            <SEOHeader/>
            <Script id="crate" src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3"
                    strategy="lazyOnload"
            >
                {`
                    const crate = new Crate({
                                server: '917520262797344779',
                                channel: '917520263384563717',
                                color: '#000',
                                location: ['bottom', 'right']
                            })
                    crate.notify('Click me to chat on the 6b6t discord server!')
                    `}
            </Script>
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
