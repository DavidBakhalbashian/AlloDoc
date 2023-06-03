
import { Link } from 'react-router-dom'
import Logo from './header images/logo1.png'
function HeaderLogo(params) {
    return(
        <div className="logo">
 <Link to='/'> <img src={Logo} alt="Logo" /></Link>  
  </div>
    )
}
export default HeaderLogo