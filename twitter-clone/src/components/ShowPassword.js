import React, { useState } from 'react';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Forms from './Forms';



function ShowPassword() {
    const [passwordShown, setPasswordShown] = useState(false);

    // Password toggle handler 
    const togglePassword = (e) =>{
        e.preventDefault();
        setPasswordShown(!passwordShown);
    }

    return (
        <div>
            <input placeholder=" "  className="form__input" type={passwordShown ? "text" : "password"} />
                    <section className="form__label">
                        <Forms formLabel="Password" />
                    </section>
                    <button className="form__showpassword" onClick={togglePassword}>
                         {passwordShown ? <VisibilityOff /> : <Visibility /> }   
                    </button>
           
        </div>
    )
}

export default ShowPassword
