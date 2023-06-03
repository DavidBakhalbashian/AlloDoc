import logo1 from '../balance-img/Vector (2).png'
import '../balance.css'
import logo2 from '../balance-img/doctor1.png'
import logo3 from '../balance-img/doctor2.png'
function Bank() {
    return(
        <>
        <div className='bank-info'>
            <img src={logo1}></img>
            <h2>10.03.2021</h2>
            <h3>Пополнение</h3>
            <h1 id = "plus-money">+ 560,00</h1>
        </div>
        <div className='bank-info'>
            <img src = {logo2}></img>
            <h2>10.03.2021</h2>
            <h3>Оплата за консультацию</h3>
            <h1 className='minus-money'>- 900,00</h1>
        </div>
        <div className='bank-info'>
            <img src ={logo3}></img>
            <h2>10.03.2021</h2>
            <h3>Оплата за консультацию</h3>
            <h1 className='minus-money'>- 900,00</h1>
        </div>
        <div className='bank-info'>
        <img src={logo1}></img>
        <h2>10.03.2021</h2>
        <h3>Пополнение</h3>
        <h1 id = "plus-money">+ 560,00</h1>
        </div>
        <div className='bank-info'>
        <img src={logo1}></img>
        <h2>10.03.2021</h2>
        <h3>Пополнение</h3>
        <h1 id = "plus-money">+ 590-,00</h1>
        </div>
        <div className='bank-info'>
        <img src ={logo3}></img>
        <h2>10.03.2021</h2>
        <h3>Оплата за консультацию</h3>
        <h1 className='minus-money'>-3000,09"</h1>
        </div>
        </>
    )
}

export default Bank