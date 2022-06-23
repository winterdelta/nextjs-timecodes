import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Timecode from 'react-timecode';
import { useState, useEffect } from 'react';
import Luxon from '../components/Luxon';

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
        <div>{date.toLocaleTimeString()}</div>
        <Luxon />
      </main>
    </div>
  );
}
