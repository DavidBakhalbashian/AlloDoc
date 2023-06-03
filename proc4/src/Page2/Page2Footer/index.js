import Logo10 from '../page2_img/appointment 1.png'
import Logo11 from '../page2_img/mortarboard 1.png'
import Logo12 from '../page2_img/Group 541.png'
import Logo13 from '../page2_img/Group 542.png'
function Page2Footer() {
    return(
        <div className="Page2footer">
      <div className="Page2footerInfo">
        <div className="h10">
            <img src={Logo10}></img>
        <h2>Ближайшая запись</h2>
        
        </div>
        <p>Вторник 03 Марта</p>
        <div className='h10'>
           <img src={Logo11}></img>
           <h2>Ближайшая запись</h2>
        </div>
        <p>1992 - Российский Государственный Университет</p>
        <p>1994 - Ординатура по специальности «Педиатрия»</p>
        <div className='h10'>
           <img src={Logo12}></img>
           <h2>Специализируется на лечении</h2>
        </div>
        <p className='pp10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. </p>
        <div className='h10'>
           <img src={Logo13}></img>
           <h2>Дополнительно</h2>
        </div>
        <p className='pp10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
      <div></div>
        </div>
    )
}
export default Page2Footer