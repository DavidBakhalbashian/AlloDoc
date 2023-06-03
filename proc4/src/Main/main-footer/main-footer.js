import { useContext, useState } from 'react'
import TransletCon from '../../constex/TranslateContext'
import Time from '../../time/time'
import MainFooterButton from './main-button/main-button'
import MainJson from './mainJson/mainJson'

function MainFoooter() {
   const [show,showclick] = useState(false)

    return(
        <div className='main-footer'>
        <MainFooterButton show = {show} showclick = {showclick} />
          <Time />
         
        {show  && <MainJson />}
         
        </div>
    )
}

export default MainFoooter