import Head from "next/head";
import Layout from "./layout/layout";

const login = () => {
    return (
        <Layout>
            <Head>
                <title> Login </title>
            </Head>
            <h2 className="text-3xl">Login Page</h2>
        </Layout>
    );
};

export default login;