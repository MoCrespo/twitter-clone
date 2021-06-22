import './main.css';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Profile from './pages/Profile'
import MobSidebar from './components/MobSidebar';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'

function App() {
  const [users, getUser] = useState([]);
    useEffect(() => {
        const json = localStorage.getItem('user')
        const savedUser = JSON.parse(json);
        if (savedUser) {
          getUser(savedUser);
        }
      }, []);
  const userId = users.map((user) => {
    return user.id
    })
   
  const onLoad  = () => {
    if(userId.length === 0){
      window.location.href = "http://localhost:3000/login"
      return 
    }
  }
   
  return (
    <div onLoad={onLoad} className="app">
        <Router>
          <MobSidebar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile" component={Profile} />
            <Route path="/" component = {Home} />
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;
