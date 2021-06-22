import React from 'react'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import Content from '../components/Content'
import MobSidebar from '../components/MobSidebar'

function Home() {
    return (
        <div className="home">
            <MobSidebar />
            <Sidebar />

            <Content  />

            <Widgets />
        </div>
    )
}

export default Home
