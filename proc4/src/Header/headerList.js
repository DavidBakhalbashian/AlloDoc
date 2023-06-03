import { useContext} from "react"
import TransletCon from "../constex/TranslateContext"

function HeaderList(params) {
  const t = useContext(TransletCon)
  return (
    <div className="list">
      <ul>
        <li className="list-item">{t.translate[0].header.ul_howUse}</li>
        <li className="list-item">{t.translate[0].header.ul_MyRecords}</li>
        <li className="list-item">{t.translate[0].header.ul_ToMakeAnAppointmentWithADoctor}</li>

      </ul>

    </div>
  )
}

export default HeaderList