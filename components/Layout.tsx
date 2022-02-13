// noinspection JSUnresolvedLibraryURL

import Script from "next/script";
import NavBar from "./NavBar";
import SEOHeader from "./SEOHeader";
import {ReactNode} from "react";

export default function Layout({children}: {children: ReactNode}) {
    return (
        <>
            <SEOHeader/>
            <Script id="crate" src="https://static.cloudflareinsights.com/beacon.min.js"
                    strategy="afterInteractive"
                    data-cf-beacon='{"token": "695b549799c6448d9b80e25f5e5d1996"}'
            >
            </Script>
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
            </div>
        </>
    )
}
