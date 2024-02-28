import CardSectionList from './components/CardSectionList'
import NavComponent from './components/Nav'

export default function Home() {
    return (
        <main className="homepage-container">
            <h1>Pink Panther</h1>
            <NavComponent />
            <CardSectionList />
        </main>
    )
}
