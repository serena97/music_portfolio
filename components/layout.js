import React from 'react';
import Pillar from './pillar';
import Head from 'next/head';
import styles from './layout.module.scss'
import Link from 'next/link';

const Layout = ({ children, showLightbox }) => (
  <>
    <Head>
      <title>GRACE</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="preload"
        href="/assets/fonts/CormorantGaramond/CormorantGaramond-Regular.ttf"
        as="font"
        crossOrigin=""
      />
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link>
    </Head>
    <main>
      <div className="App">
        {showLightbox ? (
          <>
            {children}
          </>
        ) : (
          <div className='mainContent'>
            <Pillar />
            <div className={styles.content}>
              {children}
            </div>
          </div>
        )}
        <Link href='/'>
          <a>
          <div id="logo">
            <div className={`${styles.logo} ${showLightbox ? styles['lightbox-logo'] : styles['main-logo']}`}>
              <h1>
                GRACE
              </h1>
            </div>
          </div>
          </a>
        </Link>
      </div>
    </main>
  </>
);
//TODO : make link route to portfolio

export default Layout;