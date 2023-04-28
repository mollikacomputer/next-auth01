import Head from "next/head";
import Layout from "./layout/layout";
const register = () => {
    return (
        <Layout>
            <Head>
                <title>Register</title>
            </Head>
             <h2 className="text-3xl">Register Page</h2>
        </Layout>
    );
};

export default register;