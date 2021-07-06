import InfoIcon from '@material-ui/icons/Info';
import React from 'react'
import "./Widgets.css";
import FiberManualRecord  from '@material-ui/icons/FiberManualRecord';
function Widgets() {
    const newsArticle = (heading, subtitle) =>(
        <div className="widget_article">
            <div className="widget_articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widget_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Covid case Update","Todays Cases are 14000")}
        </div>
    )
}

export default Widgets
