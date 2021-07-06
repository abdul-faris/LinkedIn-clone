import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption';
import {useDispatch, useSelector} from "react-redux";
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
    const user =useSelector(selectUser);

    const dispatch = useDispatch();

    const logOutOfApp =() => {
        dispatch(logout());
        auth.signOut();
    };
    return (
        <div className="header">
            <h1></h1>

            <div className="header_left">
               <img src="https://image.flaticon.com/icons/png/512/174/174857.png" />

               <div className="header_search">
                 <SearchIcon />  
                 <input type="text" placeholder="Search"/>
               </div>

            </div>
            <div className="header_right">
                <HeaderOption 
                Icon={HomeIcon}
                title="Home"
                 />
                <HeaderOption 
                    Icon={SupervisorAccountIcon}
                    title="My Network"
                /> 
                 <HeaderOption 
                     Icon={BusinessCenterIcon}
                     title="Jobs"
                 />  
                 <HeaderOption  
                     Icon={SmsIcon}
                     title="Message"
                 />     
                 <HeaderOption 
                    Icon={NotificationsIcon}
                    title="Notifications"

                 />  
                 <HeaderOption avatar= {user}
                     title="Me"
                     onClicks={logOutOfApp}
                 />
            </div>
            
        </div>
    )
}

export default Header
