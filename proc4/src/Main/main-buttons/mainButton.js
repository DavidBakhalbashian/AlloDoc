import { useContext } from "react"
import TransletCon from "../../constex/TranslateContext"

function  MainButton({show,showclick}) {
    const t = useContext(TransletCon)
    return(
        <div className='registr'>
        <button id='button1' onClick={()=>{showclick(!show)}}>{t.translate[1].SignUp.buttons.signUp}</button>
        <button id='button2'>{t.translate[1].SignUp.buttons.howitWorks}</button>
        </div>
    )
}

export default MainButton