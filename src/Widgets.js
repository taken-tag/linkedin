import React from 'react';
import "./widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
 
function Widgets() {
 
    const newsArticle = (heading, subtitle)=>(
        <div className="widgets_article">
           <div className="widgets_articleLeft">
              <FiberManualRecordIcon/>
           </div>

           <div className="widgets_articleRight">
               <h4>{heading}</h4>
               <p>{subtitle}</p>
           </div>
        </div>
    )


    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>linkedin news</h2>
                <InfoIcon/>
            </div>
            {newsArticle("Dev Community is back", "300 new user join")}
           {newsArticle("CovidSheild updates", "40,000 vacinated")}
           {newsArticle("Bit-coin goes down", "$25,000")}
           {newsArticle("Tesla new launch car", "Automatic")}
        </div>
    )
}


export default Widgets
