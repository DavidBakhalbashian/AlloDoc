
const url = "http://localhost:3002/results"

export const  serverGet = ()=>{
   return fetch(url).then(res => res.json())
}


