import React from 'react'
import { useContext } from 'react'
import LightboxContext from '../context/LightboxContext'

const LightBox = () => {
    const {graphicStore:{lightBoxStauts,current}, dispatch} = useContext(LightboxContext);

    const close = function closeLightBox(e) {
        if(e.target.getAttribute("class")==="lightBox"){
            return dispatch({type:"CLOSE"})
        }     
      }

    return (
    lightBoxStauts ?
        <div className="lightBox" onClick={(e)=>close(e)}>
                <div className="lightBox__img">
                    <img src={current} alt={current} />
                </div>
        </div>  
    : ""
    )
}

export default LightBox



