import NavBar from "./NavBar";
import SEOHeader from "./SEOHeader";
import {ReactNode, useEffect, useState} from "react";
import CookieConsent, {Cookies, getCookieConsentValue,} from "react-cookie-consent";
import * as gtagScript from '../lib/gtag'
import {WindowLayer} from "../lib/gtag";

const initGA = () => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagScript.GA_TRACKING_ID}`;
    document.body.appendChild(script);

    const specialWindow: WindowLayer = window as unknown as WindowLayer
    specialWindow.dataLayer = specialWindow.dataLayer || [];
    const gtagType: Gtag.Gtag = function gtag() {
        specialWindow.dataLayer.push(arguments);
    }
    window.gtag = gtagType
    gtagType('js', new Date());
    gtagType('config', gtagScript.GA_TRACKING_ID, {
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
        initGA()
    };

    return (
        <>
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
