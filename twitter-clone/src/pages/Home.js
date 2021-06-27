import React, {useState, useEffect} from 'react'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import Content from '../components/Content'
import MobSidebar from '../components/MobSidebar'
import Domain from '../env'

function Home() {
    const [users, getUser] = useState([]);
    useEffect(() => {
        const json = localStorage.getItem('user')
        const savedUser = JSON.parse(json);
        if (savedUser) {
          getUser(savedUser);
        }
      }, []);

  


  const onLoad  = async () => {
    const userId = users.map((user) => {
      return user.id
      })

    if(userId.length === 0){
      window.location.href = `${Domain}/login`
    }
  }
    return (
        <div onLoad={onLoad} className="home">
            <MobSidebar />
            <Sidebar />

            <Content  />

            <Widgets />
        </div>
    )
}

export default Home
