import HomeIcon from "@material-ui/icons/Home";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import {Link} from 'react-router-dom'


const MobSidebar = () => {
    return (
        <div className="mob-sideBar">
            <div className="icons">
                <Link to='/' className="icon">
                    <HomeIcon />
                </Link>
                <Link to='/profile' className='icon' >
                    <PermIdentityIcon className="icon" />
                </Link>
            </div>
        </div>
    )
}

export default MobSidebar
