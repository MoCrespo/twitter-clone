import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOptions from './SidebarOptions'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import TocOutlinedIcon from '@material-ui/icons/TocOutlined';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';
import { Button } from "@material-ui/core"

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon />

            <SidebarOptions active Icon={HomeRoundedIcon} text="Home" />
            <SidebarOptions Icon={SearchRoundedIcon} text="Explore" />
            <SidebarOptions Icon={NotificationsOutlinedIcon} text="Notifications" />
            <SidebarOptions Icon={SendOutlinedIcon} text="Message" />
            <SidebarOptions Icon={TocOutlinedIcon} text="Lists" />
            <SidebarOptions Icon={BookmarksOutlinedIcon} text="Bookmarks" />
            <SidebarOptions Icon={AccountCircleOutlinedIcon} text="Profile" />
            <SidebarOptions Icon={MoreOutlinedIcon} text="More" />

            <Button className="sidebarOptions__tweet" variant="outlined" fullWidth  >Tweet</Button>


        </div>
    )
}

export default Sidebar
