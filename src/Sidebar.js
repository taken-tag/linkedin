import React from 'react';
import "./sidebar.css";
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import { selectUser } from './features/userSlice';

function Sidebar(){
    const user = useSelector(selectUser);

    const recentItems = (topic)=>(
        <div className="sidebar_recentItem">
             <span className="sidebar_hash">#</span>
             <p>{topic}</p>
       
        </div>
    )

    return(
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29sb3JmdWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                <Avatar src={user.photoUrl} className="sidebar_avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                  <p>who viewd you</p>
                  <p className="sidebar_statNumber">2,543</p>
                </div>

                <div className="sidebar_stat">
                    <p>views on post</p>
                    <p className="sidebar_statNumber">2,448</p>
                    </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                  
            {recentItems("React.js")}
             {recentItems("Programming")}
             {recentItems("Software_eng")}
             {recentItems("Web_design")}
             {recentItems("Developer")}

            </div>
        </div>

    )
}

export default Sidebar