import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <Image src="/remira_logo.png" width={200} height={200} alt="logo" />
        <h1 className={styles['title-homepage']}>Welcome Remira Studio</h1>
        <p>kajskajsasjkajsaksjaksjaksjakjsakjsaksjaksjaksjaksjaksjaksjaksjaks</p>
        <Image src="/megamaslogo.png" width={200} height={200} alt="logo" />
      </Layout>
  )
}

export default Home
