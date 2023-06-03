import { useContext } from "react"
import TransletCon from "../../../../constex/TranslateContext"

function MainJsonButton2() {
    const t = useContext(TransletCon)
    return(
        
          <button className="button2"> {t.translate[3].CurrnetConsultations.SeeTheDecision}</button>
          
    )
}

export default MainJsonButton2