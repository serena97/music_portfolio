import styles from './pillar.module.css';
import Link from 'next/link'

export default function Pillar() {
    return (
        <div className={styles.pillar}>
            <div className={styles['nav-title']}>
                Ab<span className={styles.strike}>o</span>ut
            </div>
            <Link href='/blog'>
              <div className={styles['nav-title']}>
                  Bl<span className={styles.strike}>o</span>g
              </div>
            </Link>
            <div className={styles['nav-title']}>
              C<span className={styles.strike}>o</span>ntact
            </div>
        </div>
    )
}