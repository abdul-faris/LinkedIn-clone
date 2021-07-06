import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {

    const user=useSelector(selectUser)

    const recentItem =(topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
           <div className="sidebar_top">
               <img src="https://www.sammobile.com/wp-content/uploads/2019/03/keyguard_default_wallpaper_green-270x270.png" alt="" />
               <Avatar src={user.photoUrl} className="sidebar_avatar">{user.email[0]}</Avatar>
               <h2>{user.displayName}</h2>
               <h4>{user.email}</h4>
           </div>
           <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed You</p>
                    <p className="sidebar_statNumber">2543</p>
                </div>
                <div className="sidebar_stat">
                    <p>Viewed On Post</p>
                    <p className="sidebar_statNumber">2543</p>
                </div>
              
           </div>
           <div className="sidebar_bottom">
               <p>Recent</p>
               {recentItem("Programming")}
               {recentItem("Electronics and communication Engineering")}
               {recentItem("WedDesign")}
               {recentItem("Reactjs")}
              

           </div>
        </div>
    )
}

export default Sidebar
