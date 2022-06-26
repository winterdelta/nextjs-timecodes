import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import LuxonLibrary from '../components/LuxonLibrary';

export default function Home() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);

    return function cleanUp() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setDate(new Date());
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <div>This is the time:</div>
        {/* <div>{date.toLocaleTimeString()}</div> */}
        <LuxonLibrary timeDiff={4} />
      </main>
    </div>
  );
}
