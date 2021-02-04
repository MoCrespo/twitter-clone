import React from 'react'
import './Tweet.css'
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { Avatar } from '@material-ui/core'
function Tweet( {
    Name,
    userName,
    verified,
    text,
    img,
    avatar
}) {
    return (
        <div className="Tweet">
            <div className="tweet__avatar">
                 <Avatar src="" />
            </div>  
            <div className="tweet__body">
                <div className="tweet__header">
                    <div className="tweet__headerText">
                        <h3>
                            Mo Crespo  {" "}
                            <span className="tweet__headerSpecial">
                                <VerifiedUserRoundedIcon className="tweet__badge" />
                            </span>
                        </h3>
                    </div>
                    <div className="tweet__headerDescription">
                        <p>Test Paragraph</p>
                    </div>
                </div>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.businessinsider.com%2Fimage%2F53176ca3ecad04093139bd92%2Fimage.gif&f=1&nofb=1" alt="" />
                <div className="tweet__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>

    )
}

export default Tweet
