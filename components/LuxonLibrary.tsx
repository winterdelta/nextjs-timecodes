import styles from '../styles/Home.module.css';
import { DateTime } from 'luxon';

export default function Home(props: { timeDiff: number }) {
  const dt = DateTime.now()
    .plus({ minutes: props.timeDiff })
    .toLocaleString(DateTime.TIME_WITH_SECONDS);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>Luxon</div>
        <div>{props.timeDiff} min</div>
        <div>{dt}</div>
      </div>
    </div>
  );
}
