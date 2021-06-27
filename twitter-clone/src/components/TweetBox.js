import { useState, useEffect } from "react";
import { Avatar, Button } from "@material-ui/core";
import avatar from '../static/avatar/default.png'
import Api_Key from '../Api'


function TweetBox({update}) {
  const [tweetMessage, setTweetMessage] = useState("");
  // const [tweetImage, setTweetImage] = useState("");
  const [users, getUser] = useState([]);
    useEffect(() => {
        const json = localStorage.getItem('user')
        const savedUser = JSON.parse(json);
        if (savedUser) {
          getUser(savedUser);
        }
      }, []);

  const sendTweet = (e) => {
    e.preventDefault();

    const newTweet = async () => {
      const userId = users.map((user) => {
        return user.id
      })
      const res = await fetch(`${Api_Key}/tweet/new/${userId}`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              content: tweetMessage 
          })
      })
      
      const data = await res.json()
      return data

    }

    newTweet()


    setTweetMessage("");
    // setTweetImage("");
  };

  return (
    <div className="tweetBox ">
      <form>
        <div className="tweetBox__input">
          <div className="tweetBox__inputAvatar">
            <Avatar src={avatar} />
          </div>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        {/* <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        /> */}

        <Button
          onClick={sendTweet}  
          disabled={!tweetMessage}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;