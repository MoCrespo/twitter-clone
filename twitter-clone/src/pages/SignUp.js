import React from 'react'
import Forms from '../components/Forms' 
import TwitterIcon from "@material-ui/icons/Twitter"
import {Button} from '@material-ui/core'


function SignUp() {
    return (
        <div className="signUp container">
            <TwitterIcon className="form__twitterIcon" />
            <Forms title="Create account" />
            <form className="form">
                <div className="form__div">
                    <input placeholder=" " className="form__input" type="text" />
                    <section className="form__label">
                        <Forms formLabel="Username" />
                    </section>    
                </div>
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
                <div className="form__div">
                    <input placeholder=" " className="form__input" type="password" />
                    <section className="form__label">
                        <Forms formLabel="Confirm password" />
                    </section>
                </div>
                
                <Button className="form__button" type="submit" >
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
