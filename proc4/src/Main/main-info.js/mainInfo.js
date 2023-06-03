import { useContext } from 'react'
import logo from '../main images/doctor2.png'
import TransletCon from '../../constex/TranslateContext'
import { Link } from 'react-router-dom'

function MainInfo() {
    const t = useContext(TransletCon)
    return(
        <div className='info'>
                <div className='logo'>
                    <img src={logo}></img>
                </div>
                <div className='text2'>
                    <h1 id='text2-h1'>{t.translate[2].SignUpToConsultations.ToMakeAnAppointmentWithADoctor}</h1>
                    <p id='text2-p1'>{t.translate[2].SignUpToConsultations.h2}</p>
                    <ul>
                        <li><p>{t.translate[2].SignUpToConsultations.ul_admission}</p></li>
                        <li><p>{t.translate[2].SignUpToConsultations.ul_experience}</p></li>
                        <li><p>{t.translate[2].SignUpToConsultations.ul_recommendation}</p></li>
                    </ul>
                    <Link to ='/Zapis' className='Link2'><h2 id='text2-h2'>{t.translate[2].SignUpToConsultations.signup}</h2></Link>
                </div>
               
              </div>
    )
}

export default MainInfo