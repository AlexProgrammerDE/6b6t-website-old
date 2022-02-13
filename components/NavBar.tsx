import {NextPage} from "next";
import Link from "next/link";
import {useEffect, useState} from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import {getOnlinePlayers} from "../lib/playercount";
import {useInterval} from "../lib/utils";

const NavBar: NextPage = () => {
    const [open, setOpen] = useState(false);
    const [onlineText, setOnlineText] = useState<string>();

    useEffect(() => {
        getOnlinePlayers().then(data => setOnlineText(data));
    }, [onlineText]);

    useInterval(() => {
        getOnlinePlayers().then(data => setOnlineText(data));
    }, 10000);

    return (
        <header className="header text-white bg-black">
            <div className="containerWidth flex flex-col md:items-center md:justify-between md:flex-row">
                <div className="flex flex-row items-center justify-between w-full">
                    <Link href="/">
                        <a className="flex flex-col">
                            <Image layout="fixed" src={logo} alt="logo" height={64} width={64}/>
                        </a>
                    </Link>
                    <button aria-label="Expand navigation bar"
                            className="justify-self-end md:hidden rounded-lg focus:outline-none focus:shadow-outline mr-8"
                            onClick={() => setOpen(!open)}>
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                            {
                                open ?
                                    <path fillRule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clipRule="evenodd"/>
                                    :
                                    <path fillRule="evenodd"
                                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                          clipRule="evenodd"/>
                            }
                        </svg>
                    </button>
                </div>
                <nav
                    className={`${open ? "flex" : "hidden"} font-bold flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
                    <div className="text-center p-1 md:p-5">
                        <Link href="/">
                            <a className="nav">
                                Home
                            </a>
                        </Link>
                    </div>
                    <div className="text-center p-1 md:p-5">
                        <Link href="/commands">
                            <a className="nav">
                                Commands
                            </a>
                        </Link>
                    </div>
                    <div className="text-center p-1 md:p-5">
                        <a className="nav" href="https://track.6b6t.org">
                            Track
                        </a>
                    </div>
                    <div className="text-center p-1 md:p-5">
                        <a className="nav" href="https://spawn.6b6t.org">
                            Spawn
                        </a>
                    </div>
                    <div className="text-center p-1 md:p-5">
                        <a className="nav" href="https://dsc.gg/6b6t.org">
                            Discord
                        </a>
                    </div>
                    <div className="text-center p-1 pb-0 md:p-5 md:flex-shrink-0">
                        Online: {onlineText}
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;
