import { useContext } from "react"
import TransletCon from "../../../constex/TranslateContext"

function MainFooterButton({show,showclick}) {
    const t = useContext(TransletCon)
    return(
        <div className='p1'>
        <button onClick={()=>{showclick(!show)}}>{t.translate[3].CurrnetConsultations.h2}</button>
        </div>
    )
}

export default MainFooterButton