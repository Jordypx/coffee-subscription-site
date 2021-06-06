import WorkList from '../components/works'
import Plans from '../components/plans'
const MainSubscribe = () => {
    return (
        <main className="main__subscribe">
            <div className="works__wrapper subscribe__works__wrapper">
                <WorkList />               
            </div>
            <Plans />
        </main>
    )
}
export default MainSubscribe