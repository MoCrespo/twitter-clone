import React from 'react'
import Forms from '../components/Forms' 
import TwitterIcon from "@material-ui/icons/Twitter"
import {Button} from '@material-ui/core'
import ShowPassword from '../components/ShowPassword';



function SignUp() {

    return (
        <div className="signUp container">
            <TwitterIcon className="form__twitterIcon" />
            <Forms title="Create an account" />
            <form className="form">
                <div className="form__div">
                    <input placeholder=" " className="form__input" type="text" />
                    <section className="form__label">
                        <Forms formLabel="Full name" />
                    </section>    
                </div>
                <div className="form__div">
                    <input placeholder=" " className="form__input" type="text" />
                    <section className="form__label">
                        <Forms formLabel="Username" />
                    </section>    
                </div>
                <div className="form__div">
                    <input placeholder=" " className="form__input" type="email" />
                    <section className="form__label">
                        <Forms formLabel="Email" />
                    </section>
                </div>
                <div className="form__div">
                    <ShowPassword />
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
