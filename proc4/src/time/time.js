import { useContext } from "react"
import TransletCon from "../constex/TranslateContext"

function Time() {
    const t = useContext(TransletCon)
    return(
    <div className='time'>
    <p>{t.translate[3].CurrnetConsultations.TheUpcomingOnes}</p>
    <p>{t.translate[3].CurrnetConsultations.Past}</p>
    <p>{t.translate[3].CurrnetConsultations.Canceled}</p>
</div>
)
}
export default Time