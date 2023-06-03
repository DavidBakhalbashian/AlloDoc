import { useContext } from 'react'
import './footer.css'
import TransletCon from '../constex/TranslateContext'

function Footer(props) {
    let logo = require('./footer images/logo1.png')
    let clock = require('./footer images/clock (1) 1.png')
    let email = require('./footer images/email 2.png')
    let place = require('./footer images/place 1.png')
    let phone = require('./footer images/phone-call (1) 1.png')
    let insta = require('./footer images/instagram 1.png')
    let facebook = require('./footer images/facebook.png')
    let youtube = require('./footer images/youtube.png')
    let apple = require('./footer images/app store white.png')
    let googleplay = require('./footer images/appstore.png')
    const t = useContext(TransletCon)
    return(
        <div className="footer">
           <div className='foot1'>
            <img src={logo}></img>
            <p>{t.translate[4].footer.aboutUs1}</p>
            <p>{t.translate[4].footer.aboutUs2}</p>
            <p>{t.translate[4].footer.aboutUs3}</p>
            <div id='logos'>
                <img src={insta}></img>
                <img src={facebook}></img>
                <img src={youtube}></img>
            </div>
            <div className='apple'>
           
                <img src={apple}></img>
                <img src={googleplay}></img>
            </div>
           </div>
           <div  className='foot2'>
            <p>{t.translate[4].footer.howUse}</p>
            <p>{t.translate[4].footer.FAQ}</p>
            <p>{t.translate[4].footer.forDocs}</p>
            <p>{t.translate[4].footer.aboutService}</p>
            <p>{t.translate[4].footer.contact}</p>
            <p>{t.translate[4].footer.TermsOfUse} </p>
           </div>
           <div  className='foot3'>
         <div className='logotip'>  <img src={email}></img> <p>allodoc@mail.com</p></div>
         <div className='logotip'><img src={place}></img> <p>{t.translate[4].footer.address}</p></div>
         <div className='logotip'><img src={clock}></img><p>{t.translate[4].footer.toWorkSchedule}</p></div>
         <div className='logotip'> <img src={phone}></img><p>8 800 555 35 35</p></div>
           </div>
       
        </div>
    )
}

export default Footer