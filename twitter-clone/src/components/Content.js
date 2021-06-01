// import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
// import Tweet from "./Tweet";
// import db from "./firebase";
// import FlipMove from "react-flip-move";

function Content() {
  // const [tweets, setPosts] = useState([]);

  // useEffect(() => {
  //   db.collection("tweets").onSnapshot((snapshot) =>
  //     setPosts(snapshot.docs.map((doc) => doc.data()))
  //   );
  // }, []);

  return (
    <div className="content ">
      <div className="content__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      {/* <FlipMove>
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.text}
            displayName={tweet.displayName}
            username={tweet.username}
            verified={tweet.verified}
            text={tweet.text}
            avatar={tweet.avatar}
            image={tweet.image}
          />
        ))}
      </FlipMove> */}
    </div>
  );
}

export default Content;