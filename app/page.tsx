'use client'

import { useRef } from 'react'
import CardSectionList from './components/CardSectionList'
import NavComponent from './components/Nav'
import SpinnerIcon from './icons/Spinner'
import useAnimateScroll from '@/hooks/useAnimateScroll'
import IntroTitleComponent from './components/IntroTitle'
import BackgroundLayoutComponent from './components/BackgroundLayout'
import styles from './homepage.module.css'
import DetectiveIllustration from './illustrations/Detective'
import LogoIcon from './icons/Logo'
import Link from 'next/link'
import LinkPrimary from './components/LinkPrimary'

export default function Home() {
    const scrollPage = useRef(null)

    useAnimateScroll(
        '#pin-windmill',
        '#pin-windmill-wrap',
        scrollPage,
        '#pin-windmill-svg'
    )

    return (
        <div className={styles.container} ref={scrollPage} id="pin-windmill">
            <nav className={styles['nav-element']}>
                <div className={styles.nav}>
                    <LogoIcon />
                </div>
            </nav>
            <header>
                <div className={styles.hero}>
                    <IntroTitleComponent />
                    <LinkPrimary href="#section1" />
                </div>
            </header>
            <main></main>
        </div>
    )
}

// <div className={styles['main-grid']}>
//     <NavComponent />
//     {/* <CardSectionList /> */}
//     <SpinnerIcon className={styles['spinner-svg']} id="pin-windmill-svg" />
//     <div id="pin-windmill-wrap"></div>
// </div>

{
    /* <div className={styles.title}>
                
            </div> */
}

{
    /* <div className={styles['illustration-grey']}>
                <DetectiveIllustration />
            </div> */
}
