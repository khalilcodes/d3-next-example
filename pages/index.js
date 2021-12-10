import FirstChart from "../components/FirstChart"
import SecondChart from "../components/SecondChart"
import graphOne from "../lib/data-1.json"
import graphTwo from "../lib/data-2.json"

import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <FirstChart data={graphOne} />
        <SecondChart data={graphTwo} />
      </main>
    </div>
  )
}
