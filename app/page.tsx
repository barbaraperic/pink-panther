'use client'

import { useRef } from 'react'
import CardSectionList from './components/CardSectionList'
import NavComponent from './components/Nav'
import SpinnerIcon from './icons/Spinner'
import useAnimateScroll from '@/hooks/useAnimateScroll'
import IntroTitleComponent from './components/IntroTitle'
import BackgroundLayoutComponent from './components/BackgroundLayout'
import styles from './homepage.module.css'

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
            {/* <NavComponent /> */}
            <CardSectionList />
            {/* <SpinnerIcon
                className={styles['spinner-svg']}
                id="pin-windmill-svg"
            /> */}
            <div id="pin-windmill-wrap"></div>
        </div>
    )
}
