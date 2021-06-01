import React from 'react'
import TwitterIcon from "@material-ui/icons/Twitter";
import {Button} from '@material-ui/core'
import Forms from '../components/Forms'


function Login() {
    return (
        <div className="login container">
            <TwitterIcon className="form__twitterIcon" />
            <Forms title="Login to twitter" />
            <form className="form">
                <div className="form__div">
                    <input placeholder=" " className="form__input" type="text" />
                    <section className="form__label">
                        <Forms formLabel="Email" />
                    </section>
                    
                </div>
                <div className="form__div">
                    <input placeholder=" " className="form__input" type="password" />
                    <section className="form__label">
                        <Forms formLabel="Password" />
                    </section>
                </div>
                
                <Button className="form__button" type="submit" >
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
