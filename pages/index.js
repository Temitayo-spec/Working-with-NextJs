import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List || Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, molestiae accusantium at ratione tempora dolorum id impedit non voluptas quas recusandae explicabo, doloribus unde quae neque possimus. Itaque dignissimos aliquid temporibus ab! Quaerat, cupiditate! Necessitatibus corrupti ipsam animi molestias, itaque corporis quidem labore veritatis tempore soluta rerum consectetur, accusamus est.</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a></Link>

    </div>
    </>
  )
}
