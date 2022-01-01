import styles from './pillar.module.css';

export default function Pillar() {
    return (
        <div className={styles.pillar}>
            <div className={styles['nav-title']}>
              Ab<span className={styles.strike}>o</span>ut
            </div>
            <div className={styles['nav-title']}>
              Bl<span className={styles.strike}>o</span>g
            </div>
            <div className={styles['nav-title']}>
              C<span className={styles.strike}>o</span>ntact
            </div>
        </div>
    )
}