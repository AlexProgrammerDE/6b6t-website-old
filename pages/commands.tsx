import type {NextPage} from 'next'
import Layout from "../components/Layout";
import {commands} from "../lib/commands";

const Home: NextPage = () => {
    return (
        <Layout>
            {
                commands.map((category, index) => {
                    return (
                        <section key={index} className="mb-3">
                            <h3>{category.name}</h3>
                            <div className="flex flex-col gap-1">
                                {
                                    category.commands.map((command, index) => {
                                        return (
                                            <div className="flex flex-row gap-2 overflow-x-auto" key={index}>
                                                <div className="flex flex-col justify-center flex-shrink">
                                                    <code
                                                        className="bg-gray-800 rounded p-0.5 px-1.5 min-h-0 flex-grow-0 w-2xl">
                                                        {command.name}
                                                    </code>
                                                </div>

                                                {
                                                    command.limited &&
                                                    <>
                                                        <div className="flex flex-col justify-center">
                                                            <div className="hidden md:block">{" - "}</div>
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <p className="font-bold text-purple-600">{command.limited.name}</p>
                                                        </div>
                                                    </>
                                                }

                                                <div className="flex flex-col justify-center">
                                                    <div>{" - "}</div>
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <p>{command.description}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </section>
                    )
                })
            }
            <section className="mb-3">
                <h3>Limitations</h3>
                <ul className="list-disc">
                    <li>Teleportation commands are not available during combat and in 2048x2048 spawn area</li>
                </ul>
            </section>
        </Layout>
    )
}

// noinspection JSUnusedGlobalSymbols
export default Home
