import { useNavigate } from 'react-router-dom'

export function HomePage() {
    const navigate = useNavigate()
    function start(){
        navigate('/start')
    }

    return (
        <div className="home-page">
            <h1>Welcome to HOLODOS!</h1>
            <button onClick={start}>START</button>
        </div>
    )
}