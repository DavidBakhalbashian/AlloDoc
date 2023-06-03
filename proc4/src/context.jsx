import { createContext, useState } from "react";
import ru from './local/ru.json'
import en from './local/en.json'
export const Language = createContext(null);


export const  LanguageContext= ({children})=>{
    const [len, setLen] = useState(ru || en);
    // len = ru?"RU":"EN"
    return (
        <Language.Provider value={{len , setLen}}>
            {children}
        </Language.Provider>
    )

}