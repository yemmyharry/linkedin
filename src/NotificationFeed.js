import React, { useState } from 'react';
import './NotificationFeed.css';
import { Avatar, IconButton } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Popup from './Popup';

const NotificationFeed = () => {
    const [open,setOpen] = useState(false);
    
    return (
        <div className='notificationFeed'>
            <div className='notificationFeed__left'>
            <Avatar style={{cursor:'pointer'}}/>
            </div>
            <div className='notificationFeed__middle'>
                <p style={{cursor:'pointer'}}>Congratulate Jane Doe...</p>
                <button>View event</button>
            </div>
            <div className='notificationFeed__right'>
                <h1>3h</h1>
                <IconButton onClick={()=> setOpen(true)}>
                <MoreHorizIcon/>
                </IconButton>
                
            </div>
            <Popup open={open} onClose={()=> setOpen(false)}/>
        </div>
    );
};

export default NotificationFeed;