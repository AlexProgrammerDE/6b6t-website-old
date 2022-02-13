import type {NextPage} from 'next'
import Layout from "../components/Layout";
import {commands} from "../lib/commands";

const Home: NextPage = () => {
    return (
        <Layout>
            {
                commands.map((category, index) => {
                    return (
                        <section key={index} className="mb-2">
                            <h3>{category.name}</h3>
                            <div className="flex flex-col gap-1">
                                {
                                    category.commands.map((command, index) => {
                                        return (
                                            <div className="flex flex-row gap-1" key={index}>
                                                <code className="bg-gray-800 rounded-md p-0.5">
                                                    {command.name}
                                                </code>
                                                {
                                                    command.limited &&
                                                    <>
                                                        {" - "}
                                                        <p className="font-bold text-purple-600">{command.limited.name}</p>
                                                    </>
                                                }
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
