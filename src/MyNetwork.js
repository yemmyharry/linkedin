import React from 'react';
import './MyNetwork.css';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ContactsIcon from '@material-ui/icons/Contacts';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import GroupIcon from '@material-ui/icons/Group';
import EventIcon from '@material-ui/icons/Event';
import PagesIcon from '@material-ui/icons/Pages';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import MyNetworkSidebarOption from './MyNetworkSidebarOption';
import Connection from './Connection';


const MyNetwork = () => {
    return (
        <div className='mynetwork'>
            <div className='myNetwork__sidebar'>
                <h1 style={{color:'gray',fontSize:13,fontWeight:200,padding:15,cursor:'pointer'}}>Manage My Network</h1>
                <MyNetworkSidebarOption Icon={SupervisorAccountIcon} title='Connection'/>
                <MyNetworkSidebarOption Icon={ContactsIcon} title='Contacts'/>
                <MyNetworkSidebarOption Icon={NaturePeopleIcon} title='People|Follow'/>
                <MyNetworkSidebarOption Icon={GroupIcon} title='Group'/>
                <MyNetworkSidebarOption Icon={EventIcon} title='Events'/>
                <MyNetworkSidebarOption Icon={PagesIcon} title='Pages'/>
                <MyNetworkSidebarOption Icon={CardMembershipIcon} title='Newsletters'/>
                
            </div>
            <div className='myNetwork__feed'>
                <div className='myNetworkFeed__top'>
                    <h1 style={{color:'gray',fontSize:13,fontWeight:200,padding:15,cursor:'pointer',alignItems:'center'}}>No Pending Invitation</h1>
                    <h1 style={{color:'gray',fontSize:13,fontWeight:200,padding:15,cursor:'pointer',marginLeft:'auto',alignItems:'center'}}>Manage</h1>
                </div>
                <div className='myNetworkFeed__bottom'>
                    <div className='myNetworkFeedOption__top'>
                        <h1 style={{color:'gray',fontSize:13,fontWeight:300,padding:15,cursor:'pointer'}}>Industry leaders in Bangladesh you may know</h1>
                        <h2 style={{color:'gray',fontSize:13,fontWeight:300,padding:15,cursor:'pointer',marginLeft:'auto'}}>See all</h2>
                    </div>
                    <div className='myNetworkFeedOption__bottom'>
                        <Connection imageUrl='https://media-exp1.licdn.com/dms/image/C4E03AQG59suqdb7P7Q/profile-displayphoto-shrink_800_800/0/1599878772169?e=1622678400&v=beta&t=QJTSFoQptZa1nyBTLEjQ5yLil9CzLO95MhTYtl09hBw' username='anonymous otter' backgroundUrl='https://cdn.wallpapersafari.com/47/58/bu724M.jpg'/>
                        <Connection imageUrl='https://media-exp1.licdn.com/dms/image/C4E03AQG59suqdb7P7Q/profile-displayphoto-shrink_800_800/0/1599878772169?e=1622678400&v=beta&t=QJTSFoQptZa1nyBTLEjQ5yLil9CzLO95MhTYtl09hBw' username='anonymous otter' backgroundUrl='https://cdn.wallpapersafari.com/47/58/bu724M.jpg'/>
                        <Connection imageUrl='https://media-exp1.licdn.com/dms/image/C4E03AQG59suqdb7P7Q/profile-displayphoto-shrink_800_800/0/1599878772169?e=1622678400&v=beta&t=QJTSFoQptZa1nyBTLEjQ5yLil9CzLO95MhTYtl09hBw' username='anonymous otter' backgroundUrl='https://cdn.wallpapersafari.com/47/58/bu724M.jpg'/>
                        <Connection imageUrl='https://media-exp1.licdn.com/dms/image/C4E03AQG59suqdb7P7Q/profile-displayphoto-shrink_800_800/0/1599878772169?e=1622678400&v=beta&t=QJTSFoQptZa1nyBTLEjQ5yLil9CzLO95MhTYtl09hBw' username='anonymous otter' backgroundUrl='https://cdn.wallpapersafari.com/47/58/bu724M.jpg'/>
                       
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default MyNetwork;