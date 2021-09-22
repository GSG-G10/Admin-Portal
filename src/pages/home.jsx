import React from 'react'
import { BodyPortal,HeaderHome } from '../components'
import "./style.css"
function Home() {
    return (
        <div className="home-page">
        <HeaderHome />
        <BodyPortal />
        </div>
    )
}

export default Home
