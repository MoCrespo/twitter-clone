import React from 'react'
import TwitterIcon from "@material-ui/icons/Twitter";
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom'


function Login() {
    return (
        <div className="login container">
            <TwitterIcon className="login__twitterIcon" />
            <h2>Login to twitter</h2>
            <form>
                <div className="login__input">
                    <input placeholder=" " className="form__input" type="text" />
                    <label  class="form__label">phone or email or username</label>
                </div>
                <div className="login__input">
                    <input placeholder=" " className="form__input" type="password" />
                    <label  class="form__label">password</label>
                </div>
                
                <Button className="login__button" type="submit" >
                    Login
                </Button>
            </form>
                <div className="login__footer">
                    <Link to="">Forget password?</Link>
                    <Link to="">Sign in twitter</Link>
                </div>
            
        </div>
    )
}

export default Login
