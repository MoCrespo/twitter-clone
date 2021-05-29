import React from 'react'
import {Link} from 'react-router-dom'



function Forms({title, formLabel,  link, linkTo}) {
    return (
        <div>
            <h2>{title}</h2>
            <label>{formLabel}</label>
            <Link to={linkTo} >{link}</Link>
        </div>
    )
}

export default Forms
