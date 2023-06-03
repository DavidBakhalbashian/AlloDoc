import conversation from '../main images/conversation 1.png'
import vector2 from '../main images/Vector.2.png'
import video from '../main images/video-camera (1) 1.png'

function MainFooterHead(prop) {
    
    return(
        <div className="MainFooterHead">
            <div className="component">
                 
            <img src ={conversation} id='comp_1'></img> <p>03 Марта 2021</p>
              
              
            </div>
            <div className="component">
            <img src ={vector2} id='comp_1'></img>
             <p>16:00</p>
            </div>
            <div className="component">
            <img src ={video} id='comp_1'></img>
            <p>Видео связь</p>
            </div>
        </div>
    )
}

export default MainFooterHead