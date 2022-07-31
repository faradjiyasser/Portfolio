import { useContext } from "react"
import LightboxContext from "../context/LightboxContext"
import { LazyLoadImage } from "react-lazy-load-image-component";

const PortfolioModals = ({modalName, modalImage}) => {
    const {dispatch} = useContext(LightboxContext);

    const openLightBox=(src)=>{
        dispatch({type:"OPEN", payload:src})
    } 
  return (
    <>
        <div className="col-4 animation">
            <div className="portfolio__modal">
                <div className="portfolio__modal__img">
                    <LazyLoadImage src={modalImage} alt={modalImage} />
                </div>
                <div className="portfolio__modal__layer" onClick={()=> openLightBox(modalImage)}>
                    <div className="portfolio__modal__layer__content">
                        <div className="portfolio__modal__layer__content__text">{modalName}</div>
                        <div className="portfolio__modal__layer__content__icons">
                            <div className="portfolio__modal__layer__content__icons__icon">
                                
                            </div>
                            <div className="portfolio__modal__layer__content__icons__icon">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>

  )
}

export default PortfolioModals