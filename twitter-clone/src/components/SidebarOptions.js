import React from 'react'

function SidebarOptions({ active, text, Icon }) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon className="sidebarOption__icon" />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOptions
