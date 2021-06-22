import { useState, useEffect } from 'react'
import TwitterIcon from "@material-ui/icons/Twitter";
import {Button} from '@material-ui/core'
import Forms from '../components/Forms'
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Api_Key from '../Api'



function Login() {
    const [email, setEmail] = useState('')
    const [passwordShown, setPasswordShown] = useState(false);
    const [password, setPassword] = useState('');
    const [user, setUser] = useState([]);


    const togglePassword = (e) =>{
        e.preventDefault();
        setPasswordShown(!passwordShown);
    }
    const addUser = (e) => {
        e.preventDefault()
        
        
        if(!email || !password) {
            alert('Please complete your information.')
        }

    }


      // login 
      const login = async () => {
        const res = await fetch(`${Api_Key}/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email ,
                password: password
            })
        })
        const data = await res.json()
        if(data.error){
            alert(data.error)
        }
        else if(data.email === email){
            const newUser = {
                id: data.id,
                name: data.name,
                username: data.username,
                email: data.email,
            };
            setUser([...user, newUser])
            window.location.href = "http://localhost:3000/"
            
        };
     
}
    useEffect(() => {
        const json = JSON.stringify(user);
        localStorage.setItem("user", json);
    }, [user])

    
    return (
        <div className="login container">
            <TwitterIcon className="form__twitterIcon" />
            <Forms title="Login to twitter" />
            <form className="form" onSubmit={addUser}>
                <div className="form__div">
                    <input placeholder=" "   className="form__input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <section className="form__label">
                        <Forms formLabel="Email" />
                    </section>
                    
                </div>
                <div className="form__div">
                <input placeholder=" "  className="form__input" type={passwordShown ? "text" : "password"}  value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <section className="form__label">
                        <Forms formLabel="Password" />
                    </section>
                    <button className="form__showpassword" onClick={togglePassword}>
                         {passwordShown ? <VisibilityOff /> : <Visibility /> }   
                    </button>
                </div>
                
                
                <Button  className="form__button" type="submit" onClick={login}>
                    Login
                </Button>
            </form>
                <div className="form__footer">
                    <Forms link="Forget password?" linkTo="#" />
                    <Forms link="Sign up Twitter" linkTo="/signup" />
                </div>
            
        </div>
    )
}

export default Login
