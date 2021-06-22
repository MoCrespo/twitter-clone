import { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Tweet from "./Tweet";
import FlipMove from "react-flip-move";
import Api_Key from "../Api";
import avatar from '../static/avatar/default.png'
import DeleteIcon from '@material-ui/icons/Delete';

function Content() {
  const [tweets, setTweets] = useState([]);
  const [users, getUser] = useState([]);
    useEffect(() => {
        const json = localStorage.getItem('user')
        const savedUser = JSON.parse(json);
        if (savedUser) {
          getUser(savedUser);
        }
      }, []);

  useEffect(() => {
    const getTweets = async () => {
      const tweetFromServer = await fetchTweets()
      setTweets(tweetFromServer)
    }
    getTweets()
  }, []);

  // Fetch tweets 

  const fetchTweets = async () => {
    const res = await fetch(`${Api_Key}/tweets`)
    const data = await res.json()

    console.log(data)
    return data
  }


  // delete tweets 
  const deleteTweet = async (id) => {
    await fetch(`${Api_Key}/tweet/${id}`,{
      method:'DELETE'
    })
    setTweets(tweets.filter((tweet) => tweet.id !== id))
  }
  

  return (
    <div className="content ">
      <div className="content__header">
        <h2>Home</h2>
      </div>


      <TweetBox  />
      <FlipMove>
        {tweets.map((tweet) => (
          <Tweet
          key={tweet.id}
          text={tweet.content}
          avatar={avatar}
          name={tweet.name}
          username={tweet.username}
            deleteIcon={users.map((user) => (
              tweet.user_id === user.id ? <DeleteIcon  fontSize='small' /> : false
            ))}
            onDelete={() => deleteTweet(tweet.id)}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Content;