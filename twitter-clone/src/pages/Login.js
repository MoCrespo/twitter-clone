import React, { useState } from 'react'
import TwitterIcon from "@material-ui/icons/Twitter";
import {Button} from '@material-ui/core'
import Forms from '../components/Forms'
import ShowPassword from '../components/ShowPassword';


function Login() {
    // const [name, setName] = useState('');
    // const nameChange = e => setName(e.target.value);

    return (
        <div className="login container">
            <TwitterIcon className="form__twitterIcon" />
            <Forms title="Login to twitter" />
            <form className="form">
                <div className="form__div">
                    <input placeholder=" "   className="form__input" type="email" />
                    <section className="form__label">
                        <Forms formLabel="Email" />
                    </section>
                    
                </div>
                <div className="form__div">
                    <ShowPassword />
                </div>
                
                
                <Button  className="form__button" type="submit" >
                    Login
                </Button>
            </form>
                <div className="form__footer">
                    <Forms link="Forget password?" linkTo="/" />
                    <Forms link="Sign up Twitter" linkTo="/signup" />
                </div>
            
        </div>
    )
}

export default Login
