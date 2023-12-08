import Image from 'next/image'
import { LoadModel } from "../components/LoadModel"; 
import styles from './Dashboard.module.css';
import Head from 'next/head'

export default function Dashboard() {
  return (
    <div>
      <Head>
      <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

    <main className={styles.main}>
      <div>
        <h1 className={styles.h1}>My Portfolio</h1>
      </div>
      <div className={styles.images}>
        <a href="../helmet" target="_self">
          <img className={styles.img} src="/models/helmet/helmet.png" height={150} width={150} />
        </a>
        <a href="../lense" target="_self">
          <img className={styles.img} src="/models/lense/lense.png" height={150} width={150} />
        </a>
        <a href="../ironMan" target="_self">
          <img className={styles.img} src="/models/ironMan/IronMan.png" height={150} width={150} />
        </a>
      </div>
      <div className={styles.images}>
        <a href="../helmet" target="_self">
          <img className={styles.img} src="/models/helmet/helmet.png" height={150} width={150} />
        </a>
        <a href="../lense" target="_self">
          <img className={styles.img} src="/models/lense/lense.png" height={150} width={150} />
        </a>
        <a href="../ironMan" target="_self">
          <img className={styles.img} src="/models/ironMan/IronMan.png" height={150} width={150} />
        </a>
      </div>
      <div className={styles.images}>
        <a href="../helmet" target="_self">
          <img className={styles.img} src="/models/helmet/helmet.png" height={150} width={150} />
        </a>
        <a href="../lense" target="_self">
          <img className={styles.img} src="/models/lense/lense.png" height={150} width={150} />
        </a>
        <a href="../ironMan" target="_self">
          <img className={styles.img} src="/models/ironMan/IronMan.png" height={150} width={150} />
        </a>
      </div>
    </main>
    </div>
  );
}
