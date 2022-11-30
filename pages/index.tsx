import type { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1 className={styles["title-homepage"]}>Welcome Remira Studio</h1>
      <p>Test koneksi SSH</p>
    </Layout>
  );
};

export default Home;
