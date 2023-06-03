import "./header.css"
import HeaderLogo from "./headerLogo";
import HeaderList from "./headerList";
import Kolok from "./headerKolok";
import Logo3 from "./header images/logo4.png";
import Logo4 from "./header images/Vector.png";
import Logo5 from "././header images/user (3) 1.png";
import Logo6 from "./header images/credit-card (3) 1.png";
import Logo7 from "./header images/help (1) 1.png";
import Logo8 from "./header images/credit-card (3) 1.png"

import { useContext, useState } from "react";

import ru from '../local/ru.json'
import en from '../local/en.json'
import TransletCon from "../constex/TranslateContext";
import { Link } from "react-router-dom";

const Header = ({ setlen, len}) => {
  const [show, setShow] = useState(false)
  const t = useContext(TransletCon)

  const changLangueage = (event) => {
    const lenq = event.target.innerText
    
    if (lenq === "RU") {
      setlen(ru)
    }
    if (lenq === "EN") {
      setlen(en)
    }
  }
  return (
    <nav className="header">
      <HeaderLogo />
      <HeaderList />
      <Kolok />

      <div className="inform">
        <img src={Logo3} id="logo3"></img>


        <p id="name1">{t.translate[0].header.userName}</p>


        <img src={Logo4} id="logo4" onClick={() => { setShow(!show) }}></img>
        {show && <div className="opt">
          <div className="profile">
            <img src={Logo5} id="logo5"></img > <Link to= '/' className="Link" onClick={() => { setShow(!show) }}><p>{t.translate[5].userProfile.myPage}</p></Link> 
          </div><hr id="hr" />
          <div className="profile">
            <img src={Logo6} id="logo5"></img ><Link to='/Balance' className="Link" onClick={() => { setShow(!show) }}><p>{t.translate[5].userProfile.upBalanse}</p></Link>
          </div><hr id="hr" />
          <div className="profile">
            <img src={Logo7} id="logo5"></img> <a href="https://allodoc.kz/faq" className="Link" ><p>FAQ</p></a>
          </div><hr id="hr" />
          <div className="profile">
            <img src={Logo8} id="logo5"></img> <a href="https://www.google.com/"  className="Link"><p>{t.translate[5].userProfile.LogOut}</p></a>
          </div>
        </div>
        }
      </div>

      <div className="language">
        <div className="pp1">
          <p className={len === "RU" ? 'pr' : ''} onClick={changLangueage}>RU</p>
        </div>
        <div className="pp1">
          <p className={len === "EN" ? 'pr' : ''} onClick={changLangueage}>EN</p>
        </div>
      </div>



    </nav>

  )
}



export default Header