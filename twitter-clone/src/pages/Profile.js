import { useState, useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import Tweet from '../components/Tweet';
import FlipMove from "react-flip-move";
import {Avatar} from '@material-ui/core'
// import Forms from '../components/Forms'
import avatar from '../static/avatar/default.png';
import DeleteIcon from '@material-ui/icons/Delete';
import Api_Key from '../Api';



function Profile() {
    const [tweets, setTweets] = useState([]);
    const [users, getUser] = useState([]);

    useEffect(() => {
        const json = localStorage.getItem('user')
        const savedUser = JSON.parse(json);

        if (savedUser){
            getUser(savedUser);            
        }
    }, [])


    useEffect(() => {
        const getTweets = async () => {
            const tweetFromServer = await fetchTweets()
            setTweets(tweetFromServer)
        }
        getTweets()
    },[users])

//
      const fetchTweets = async () => {
          const userId = users.map((user) => user.id)
          const res = await fetch(`${Api_Key}/tweets/${userId}`)
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


        <div className="profile">
            <Sidebar />
                <div className="profile__div">
                    <div className="profile__header">
                        <div className="profile__avatar">
                            <Avatar src={avatar} />
                        </div>
                        {users.map((user) => (
                            <div key={user.id}>

                                <div className="profile__info">
                                    <h2 className="profile__name">{user.name}</h2>
                                    <span className="profile__username">@{user.username}</span>
                                </div>

                            </div>
                        ))}
                    </div>
                    <FlipMove >
                        {tweets.map((tweet) => (
                        <Tweet
                        key={tweet.id}
                        text={tweet.content}
                        avatar={avatar}
                        name={tweet.name}
                        username={tweet.username}
                            deleteIcon={<DeleteIcon  fontSize='small' />}
                            onDelete={() => deleteTweet(tweet.id)}
                        />
                        ))}
                    </FlipMove>
                    {/* <form className="profile__body">
                        <div className="profile__bodyInfo">
                            <h4>Account Info</h4>
                            <div className="profile__bodyLabel">
                                <Forms formLabel="Username"/>
                            </div>
                            <div className="form__div">
                                <input placeholder=" "   className="form__input" type="text" />
                            </div>
                            <div className="profile__bodyLabel">
                                <Forms formLabel="Email"/>
                            </div>
                            <div className="form__div">
                                <input placeholder=" "   className="form__input" type="email" />
                            </div>
                            <div className="profile__bodyLabel">
                            <label htmlFor="uploadPicture">Update profile picture</label> <br/>
                            <input id="uploadPicture" className="upload__picture" type="file" />
                            </div>

                        </div> */}
                        {/* <input className="profile__bodyUpdate" type="submit"  value="Update" />
                    </form> */}
                </div>
            <Widgets />
        </div>
    )
}

export default Profile
