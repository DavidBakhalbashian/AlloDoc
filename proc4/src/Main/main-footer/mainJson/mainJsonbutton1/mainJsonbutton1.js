import { useContext } from "react"
import TransletCon from "../../../../constex/TranslateContext"
import data from '../../../../data.json'
import { Link } from "react-router-dom"
function MainJsonButton1() {
    const t = useContext(TransletCon)
    const users = data.results
    const user3 = users.slice(0,3)

    return(
        
          <button className="button1"><Link to= '/AboutDoctor' className="Link1"> {t.translate[3].CurrnetConsultations.ViewTheRecord}</Link></button>
          
    )
}

export default MainJsonButton1