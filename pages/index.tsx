import type {NextPage} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {getOnlinePlayers} from "../lib/playercount";
import {useInterval} from "../lib/utils";
import {useEffect, useState} from "react";
import Image from 'next/image';
import logo from '../public/logo.png'
import Script from 'next/script';

const Home: NextPage = () => {
    const [onlineText, setOnlineText] = useState<string>();

    useEffect(() => {
        getOnlinePlayers().then(data => setOnlineText(data));
    }, [onlineText]);

    useInterval(() => {
        getOnlinePlayers().then(data => setOnlineText(data));
    }, 10000);

    const seoTitle = '6builders 6tools';
    const seoDescription = '6b6t.org is a Minecraft cracked anarchy server with /tpa and /home. IP: 6b6t.org';
    const seoImage = 'https://6b6t.org/logo.png';
    const seoUrl = 'https://6b6t.org';

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="icon" href="/favicon.ico"/>

                <title>6b6t</title>
                <meta name="keywords" content="6b6t, minecraft, cracked, anarchy, server, 6builders6tools"/>
                <meta name="author" content="AlexProgrammerDE"/>
                <meta name="description" content={seoDescription} />

                <meta name="og:type" content="website" />
                <meta name="og:url" content={seoUrl} />
                <meta name="og:title" content={seoTitle} />
                <meta name="og:url" content={seoUrl} />
                <meta name="og:description" content={seoDescription} />
                <meta name="og:image" content={seoImage} />

                <meta name="theme-color" content={"#3D45CD"} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content={seoUrl} />
                <meta name="twitter:title" content={seoTitle} />
                <meta name="twitter:description" content={seoDescription} />
                <meta name="twitter:image" content={seoImage} />
                <meta name="twitter:image:alt" content="6b6t logo" />

                <meta name="format-detection" content="telephone=no" />
            </Head>
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
            <header className="header text-white">
                <div className="container">
                    <ul>
                        <li className="logo">
                            <Link href="/">
                                <a>
                                    <Image src={logo} alt="logo" height={64} width={64}/>
                                </a>
                            </Link>
                        </li>
                        <li className="navbutton">
                            <span className="online">Online: {onlineText}</span>
                        </li>
                        <li className="navbutton">
                            <Link href="/">
                                <a className="nav">
                                    Home
                                </a>
                            </Link>

                        </li>
                    </ul>
                </div>
            </header>

            <div className="container clearfix">
                <div className="content">
                    <article className="article animated slideInUp">
                        <h1>About:</h1>
                        <ul>
                            <li>IP: 6b6t.org</li>
                            <li>Versions: 1.8.x to 1.18.x (1.12.2 Recommended)</li>
                            <li>CPU: AMD Ryzen 9 5950X</li>
                            <li>RAM: 128GB DDR4</li>
                            <li>STORAGE: 2x2TB NVMe SSD Gen 4.0</li>
                            <li>DDOS Protection: Path.net</li>
                            <li>6b6t is a non-vanilla cracked anarchy server with no rules which means everything is
                                allowed and you can not get punished (No bans or mutes or kicks).
                            </li>
                        </ul>
                        <br/>

                        <h1>Discord:</h1>
                        <p>
                            Join the 6b6t.org Official Discord Server to keep up with the latest updates with the
                            server: <a href="https://dsc.gg/6b6t.org" target="_blank"
                                       rel="noreferrer">https://dsc.gg/6b6t.org</a>
                        </p>
                    </article>
                </div>
            </div>
        </>
    )
}

// noinspection JSUnusedGlobalSymbols
export default Home
