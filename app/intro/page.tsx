import IntroTitleComponent from '../components/IntroTitle'
import SwingComponent from '../components/Swing'
import PantherMorphComponent from '../icons/PantherMorph'
import DetectiveIllustration from '../illustrations/Detective'
import styles from './page.module.scss'

export default function IntroPage() {
    return (
        <main className={styles.container}>
            <div className={styles.title}>
                <IntroTitleComponent />
            </div>
            <div className={styles['illustration-grey']}>
                <DetectiveIllustration />
            </div>
            {/* <SwingComponent /> */}
            {/* <PantherMorphComponent className="w-10 h-10" /> */}
        </main>
    )
}
