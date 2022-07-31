import React from 'react'
import { HiSearchCircle, HiHeart } from "react-icons/hi";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PortfolioList = ({cardName, cardImage, link}) => {
    function previewLink(){
        window.open(link);
    }
  return (
    <>
        <div className="col-4">
            <div className="portfolio__card animation">
                <div className="portfolio__card__img">
                    <LazyLoadImage src={cardImage} alt={cardImage} />
                </div>
                <div className="portfolio__card__layer">
                    <div className="portfolio__card__layer__content">
                        <div className="portfolio__card__layer__content__text">{cardName}</div>
                        <div className="portfolio__card__layer__content__icons">
                            <div className="portfolio__card__layer__content__icons__icon" onClick={previewLink}>
                                <HiSearchCircle size={50}/>
                            </div>
                            <div className="portfolio__card__layer__content__icons__icon">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}

export default PortfolioList