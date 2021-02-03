import React from 'react'
import './SidebarOptions.css'

function SidebarOptions({ active, text, Icon }) {
    return (
        <div className={`sidebarOptions ${active && 'sidebarOptions--active'}`}>
            <Icon />
            <h3>{text}</h3>
        </div>
    )
}

export default SidebarOptions
