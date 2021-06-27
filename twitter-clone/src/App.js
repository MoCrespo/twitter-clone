import './main.css';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {   
  return (
    <div   className="app">
        <Router>
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
