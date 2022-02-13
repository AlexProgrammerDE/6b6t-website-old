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
                                            <div className="flex flex-row gap-1" key={index}>
                                                <div className="flex flex-col md:flex-row gap-1">
                                                    <div className="flex flex-col">
                                                        <code
                                                            className="bg-gray-800 rounded-md p-0.5 min-h-0 overflow-x-scroll flex-grow-0">
                                                            {command.name}
                                                        </code>
                                                    </div>
                                                    {
                                                        command.limited &&
                                                        <>
                                                            <div className="hidden md:block">{" - "}</div>
                                                            <p className="font-bold text-purple-600">{command.limited.name}</p>
                                                        </>
                                                    }
                                                </div>
                                                {" - "}
                                                <p>{command.description}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </section>
                    )
                })
            }
        </Layout>
    )
}

// noinspection JSUnusedGlobalSymbols
export default Home
