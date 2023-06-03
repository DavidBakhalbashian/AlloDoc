import data from '../../../data.json'
import MainFooterHead from '../../main-footer-head.js/main-footer-header'
import MainJsonButton2 from './mainJsonbutton1/mainJsonButton2'
import MainJsonButton1 from './mainJsonbutton1/mainJsonbutton1'
function MainJson() {
    const users = data.results
    const user3 = users.slice(0,3)
    const staj = new Date()
    const year = staj.getFullYear()
    return(
        <>
        {user3.map(user =>{
            return(
              
              <div className='b'>
             
              <div  key={user.id}  className='box'>
             <MainFooterHead />
              <div className='box-glava'>
              <div className='glavni'>
               <div className='img'>
               <img src ={user.profile_image}></img>
               
               </div>
               <div className='items'>
                <p className='items_p1'>{user.first_name}</p>
                <p className='p2'>{user.user_categories[0].category.title.ru}</p>
                <p className='p3'>стаж {year-user.excperience_start_year} лет</p>
               </div>
               </div>
               <div className='buttton'>
            <MainJsonButton1 />
         <MainJsonButton2 />
            </div>
            </div>
              </div>
        
             </div>
               
            )
                 })}
                 </>
    )
}

export default MainJson