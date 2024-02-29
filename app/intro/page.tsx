'use client'

import { useGSAP } from '@gsap/react'
import SprinklesBanner from '../components/SprinklesBanner'
import { useEffect, useLayoutEffect } from 'react'
import SwingComponent from '../components/Swing'

export default function IntroPage() {
    return (
        <main className="w-full h-full flex justify-center items-center">
            <SwingComponent />
        </main>
    )
}
