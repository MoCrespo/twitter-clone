import {useState} from 'react'
import Forms from '../components/Forms' 
import TwitterIcon from "@material-ui/icons/Twitter"
import {Button} from '@material-ui/core'
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Api_Key from '../Api'




function SignUp() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [passwordShown, setPasswordShown] = useState(false);
    const [password, setPassword] = useState('');


    const togglePassword = (e) =>{
        e.preventDefault();
        setPasswordShown(!passwordShown);
    }

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!name || !username || !email) {
            alert('Please complete your information.')
        }

        

        
    }

    // register 
    const addUser = async () => {
        const res = await fetch(`${Api_Key}/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                username: username,
                email: email,
                password: password
            })
        })
        const data = await res.json()
        if(data.error){
            alert(data.error)
        }
        else if(data.success){
            console.log(data.success);
            window.location.href = "https://twitter-clone-bycr.web.app"
            
        }

            
        
    }

    

    return (
        <div className="signUp container">
            <TwitterIcon className="form__twitterIcon" />
            <Forms title="Create an account" />
            <form className="form" onSubmit={onSubmit} >
                <div className="form__div">
                    <input placeholder=" " className="form__input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <section className="form__label">
                        <Forms formLabel="name" />
                    </section>    
                </div>
                <div className="form__div">
                    <input placeholder=" " className="form__input" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <section className="form__label">
                        <Forms formLabel="Username" />
                    </section>    
                </div>
                <div className="form__div">
                    <input placeholder=" " className="form__input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
                
                    <Button className="form__button" type="submit" onClick={addUser} >
                        Sign Up
                    </Button>
               
            </form>
                <div className="form__footer">
                    <Forms link="Do you've an account?" linkTo="/login" />
                </div>
        </div>
    )
}

export default SignUp
