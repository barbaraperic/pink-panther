'use client'

import { useRef } from 'react'
import CardSectionList from './components/CardSectionList'
import NavComponent from './components/Nav'
import SpinnerIcon from './icons/Spinner'
import useAnimateScroll from '@/hooks/useAnimateScroll'

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
            {/* <h1>Pink Panther</h1> */}
            <NavComponent />
            <CardSectionList />
            <SpinnerIcon className="spinner-svg" id="pin-windmill-svg" />
            <div id="pin-windmill-wrap"></div>
        </main>
    )
}
