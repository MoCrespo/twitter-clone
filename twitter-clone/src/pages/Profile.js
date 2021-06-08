import React from 'react'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import {Avatar} from '@material-ui/core'
import Forms from '../components/Forms'

function Profile() {
    return (
        <div className="profile">
            <Sidebar />
                <div className="profile__div">
                    <div className="profile__header">
                        <div className="profile__avatar">
                            <Avatar />
                        </div>
                        <div className="profile__info">
                            <h2 className="profile__name">Mohamed Crespo</h2>
                            <span className="profile__username">MoCrespo</span>
                        </div>
                    </div>
                    <form className="profile__body">
                        <div className="profile__bodyInfo">
                            <h4>Account Info</h4>
                            <div className="profile__bodyLabel">
                                <Forms formLabel="Username"/>
                            </div>
                            <div className="form__div">
                                <input placeholder=" "   className="form__input" type="text" />
                            </div>
                            <div className="profile__bodyLabel">
                                <Forms formLabel="Email"/>
                            </div>
                            <div className="form__div">
                                <input placeholder=" "   className="form__input" type="email" />
                            </div>
                            <div className="profile__bodyLabel">
                            <label htmlFor="uploadPicture">Update profile picture</label> <br/>
                            <input id="uploadPicture" className="upload__picture" type="file" />
                            </div>

                        </div>
                        <input className="profile__bodyUpdate" type="submit"  value="Update" />
                    </form>
                </div>
            <Widgets />
        </div>
    )
}

export default Profile
