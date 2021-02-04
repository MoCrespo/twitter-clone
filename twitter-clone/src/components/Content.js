import React from 'react'
import './Content.css'
import TweetBox from './TweetBox'
import Tweet from './Tweet'
function Content() {
    return (
        <div className="content"> 
           <div className='content__header' >
               <h2>Home</h2>
           </div>
           <TweetBox />
           <Tweet />
           <Tweet />
           <Tweet />
           <Tweet />

        </div>
    )
}

export default Content
