import styles from './pillar.module.scss';
import Link from 'next/link'

export default function Pillar() {
    return (
        <nav>
          {/* desktop menu */}
          <div className={`hidden ${styles.pillar}`} >
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
          {/**mobile menu */}
          <div className='sm:hidden bg-black flex justify-between h-20'>
            <Link href='/'>
              <div className="text-white p-1 pl-8 inline-block">
                <span className='text-7xl tracking-widest	'>
                  GRACE
                </span>
              </div>
            </Link>
            {/* Mobile menu button */}
            <input type='checkbox' className={`${styles['navigation__checkbox']}`} id='navi-toggle'></input>
            <label htmlFor='navi-toggle' className={`${styles['navigation__button']}`}>
              <span className={`${styles['navigation__icon']}`}>&nbsp;</span>
            </label>

            <div class={`${styles['navigation__overlay']}`} id="mobile-menu">
            </div>
            <ul class={`${styles['navigation__list']}`}>
                <li>
                  <a href="#" aria-current="page">
                    Ab<span className={styles.strike}>o</span>ut
                  </a>
                </li>
                <Link href='/blog'><li>Bl<span className={styles.strike}>o</span>g</li></Link>
                <li>
                  <a href="#">C<span className={styles.strike}>o</span>ntact</a>
                </li>
              </ul>
          </div>
        </nav>
    )
}