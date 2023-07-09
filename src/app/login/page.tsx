import Layout from "../components/layout";
import Login from "../components/Login";

export default function Home() {
  return (
    <Layout
      titleHeader="All Stack System Administration Login"
      onMainContent={false}
    >
      <Login needLogo />
    </Layout>
  );
}
