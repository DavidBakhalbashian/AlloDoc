import './main.css'

import doctor_logo from './main images/doctor.png'
import MainButton from './main-buttons/mainButton'
import MainInfo from './main-info.js/mainInfo'
import MainFoooter from './main-footer/main-footer'
import { useContext, useState } from 'react'
import TransletCon from '../constex/TranslateContext'
function Main() {
  const t = useContext(TransletCon)
  const [show,showclick] = useState(false)
    return(
        <div className="main">
            <div className="main-header">
              <div className="component1">
                <div className='text'>
               <h1>{t.translate[1].SignUp.OnlineConsultations}</h1>
            <p>{t.translate[1].SignUp.description}</p>
               </div>
                <MainButton show = {show} showclick = {showclick} />
              </div>
              <div className="component2">
                <img src={doctor_logo} id='doctor'></img>
              </div>
              </div>
             {show && <MainInfo />}
             <MainFoooter />
             
        </div>
      
    )
}


export default Main