import Layout from "../components/layout/page";
import Login from "../components/Login/page";

export default function Home() {
    return (
        <Layout titleHeader="All Stack System Administration Login" onMainContent={false} >
            <Login needLogo />
        </Layout>
);
}
