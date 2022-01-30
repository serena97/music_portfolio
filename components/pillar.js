import styles from './pillar.module.css';
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
          <div className='sm:hidden bg-gray-800 flex justify-between h-20'>
            <div className="text-white p-1 pl-2 inline-block">
              <span className='text-7xl'>
                GRACE
              </span>
            </div>
            <div className="sm:hidden right-0 inline-block">
              {/* Mobile menu button */}
              <button type="button" className="h-full inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {/* icon when menu is closed */}
                <svg className="block h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* icon when menu is open */}
                <svg className="hidden h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* <div class="sm:hidden" id="mobile-menu">
              <div class="px-2 pt-2 pb-3 space-y-1">
                <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">About</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
              </div>
            </div> */}
          </div>
        </nav>
    )
}