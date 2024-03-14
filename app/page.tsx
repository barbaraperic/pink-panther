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
                <div className={styles.nav}></div>
                <LogoIcon />
            </nav>
            {/* <div className={styles.title}>
                <IntroTitleComponent />
            </div> */}
            <div className={styles['main-grid']}>
                <NavComponent />
                {/* <CardSectionList /> */}
                <SpinnerIcon
                    className={styles['spinner-svg']}
                    id="pin-windmill-svg"
                />
                <div id="pin-windmill-wrap"></div>
            </div>
            {/* <div className={styles['illustration-grey']}>
                <DetectiveIllustration />
            </div> */}
        </div>
    )
}
