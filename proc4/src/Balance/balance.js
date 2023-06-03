import'./balance.css'
import Money from './money/money'
import BalMoney from './balance-button1/balance-button1'
import BalanceTime from './balnce-time/balnce-Time'
import Bank from './balance-bank'

function Balance() {
    return (
        <div className='balance'>
        <div classname = "balance-header">
            <h1 id= "h11">Баланс</h1>
            <div className='money-bal'>
            <Money />
           <BalMoney />
            </div>
            <h3 className='h3'>История платежей</h3>

         </div>
         <div className='balance-footer'>
            <BalanceTime />
            <Bank />
         </div>
            
            </div>
    )
}

export default Balance
