import { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";



const Tweet = forwardRef(
  ({ name, username, text, avatar, deleteIcon, onDelete  }, ref) => {
    return (
      <div className="tweet " ref={ref}>
        <div className="tweet__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="tweet__body">
          <div className="tweet__header">
            <div className="tweet__headerText">
              <h3>
                {name}{" "}
                <span className="tweet__headerSpecial">
                 <VerifiedUserIcon className="tweet__badge" /> @
                  {username}
                </span>
                <button onClick={onDelete} className="tweet_headerDelete">
                  {deleteIcon}
                </button>
              </h3>
            </div>
            <div className="tweet__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          {/* <img  alt="" /> */}
          <div className="tweet__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" /> 
          </div>
        </div>
      </div>
    );
  }
);

export default Tweet;