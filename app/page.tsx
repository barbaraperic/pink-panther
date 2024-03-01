'use client'

import { useRef } from 'react'
import CardSectionList from './components/CardSectionList'
import NavComponent from './components/Nav'
import SpinnerIcon from './icons/Spinner'
import useAnimateScroll from '@/hooks/useAnimateScroll'
import IntroTitleComponent from './components/IntroTitle'
import Image from 'next/image'
import test from './test.svg'
import SwingComponent from './components/Swing'

export default function Home() {
    const scrollPage = useRef(null)

    useAnimateScroll(
        '#pin-windmill',
        '#pin-windmill-wrap',
        scrollPage,
        '#pin-windmill-svg'
    )

    return (
        <main ref={scrollPage} className="homepage-container" id="pin-windmill">
            <div className="h-20 my-10">
                <IntroTitleComponent />
            </div>
            <NavComponent />
            <CardSectionList />
            <SpinnerIcon className="spinner-svg" id="pin-windmill-svg" />
            <div id="pin-windmill-wrap"></div>
            {/* <SwingComponent /> */}
        </main>
    )
}
