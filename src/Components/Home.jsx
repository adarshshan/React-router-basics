import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => navigate('order-summary', { replace: true })}>place order</button>
        </div>
    )
}

export default Home
