import React from 'react'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import Content from '../components/Content'

function Home() {
    return (
        <div className="home container">
            <Sidebar />

            <Content  />

            <Widgets />
        </div>
    )
}

export default Home
