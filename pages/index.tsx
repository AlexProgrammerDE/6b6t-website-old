import type {NextPage} from 'next'
import Layout from "../components/Layout";

const Home: NextPage = () => {
    return (
        <Layout>
            <h2>About</h2>
            <ul className="mb-2">
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

            <h2>Discord</h2>
            <p className="pb-2">
                Join the 6b6t.org Official Discord Server to keep up with the latest updates with the
                server: <a href="https://dsc.gg/6b6t.org" target="_blank"
                           className="link"
                           rel="noreferrer">https://dsc.gg/6b6t.org</a>
            </p>

            <h2>Popular questions</h2>

            <h3>What is 6b6t?</h3>
            <p>
                6b6t is a Minecraft Anarchy Server, that means there are no rules. It&apos;s one of the
                few
                cracked (also known as offline mode) anarchy servers which allows everyone to play. The
                server is semi-vanilla, it has commands like /tpa, /home and /hat. 6b6t started January
                16 2022 and the map will never reset.
            </p>

            <h3>What is 6b6t seed?</h3>
            <p>6b6t seed is the same as 2b2t seed: -4172144997902289642</p>

            <h3>Is hacking allowed?</h3>
            <p>Yes, as mentioned above, there are truly no rules.</p>

            <h3>Are lag machines allowed?</h3>
            <p>
                Yes, 6b6t admins already patched most of the lag machines and if you help us find a
                working one, we will reward you.
            </p>
        </Layout>
    )
}

// noinspection JSUnusedGlobalSymbols
export default Home
