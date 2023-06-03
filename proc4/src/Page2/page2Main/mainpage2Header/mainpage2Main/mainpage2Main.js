import Doctor from '../../../page2_img/8e18b3caf2b15a0d25bccd0f9b8526d8 1.png'
function Mainpage2Main() {
    
    return(
        <div className="AboteDoctor">
        <div className="AboteDoctorFace">
            <div>
            <img src={Doctor}></img>
            </div>
            <div className='hhh2'>
            <h2>Ольга Никитина</h2>
            <p>Педиатр, Терапевт</p>
            <p>стаж 15 лет</p>
            </div>
        </div>
        <div className="AboutService">
            <p>900$/консультация</p>
            <p>30 минут</p>
        </div>
        </div>
    )
}

export default Mainpage2Main