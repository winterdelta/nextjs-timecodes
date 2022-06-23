import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Timecode from 'react-timecode';
import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

export default function Home() {
  const dt = DateTime.now()
    .plus({ minutes: 15 })
    .toLocaleString(DateTime.TIME_WITH_SECONDS);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <div>Luxon</div>
        <div>{dt}</div>
      </main>
    </div>
  );
}
