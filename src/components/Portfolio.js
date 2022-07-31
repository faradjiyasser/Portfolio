import React, { useState } from 'react'
import PortfolioList from '../listes/PortfolioList'
import PortfolioModals from '../listes/PortfolioModals';
import { AiOutlineGlobal, AiOutlinePicture, AiOutlineFieldTime } from "react-icons/ai";
import WebData from '../data/WebData';
import GraphicData from '../data/GraphicData';
import WorkingonData from '../data/WorkingonData';

const Portfolio = () => {
  const [display, dispatch] = useState({
    web:true,
    graphic:false,
    progress:false,
  })

  return (
    <div className="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="portfolio__heading">
              My Portfolio
            </h1>
          </div>
          <div className="col-12">
            <div className="portfolio__categories">

              <div className="portfolio__categories__icon" id='web' onClick={()=>dispatch({web:true,graphic:false,
                progress:false})}>
                <AiOutlineGlobal size={25} />
                </div>

              <div className="portfolio__categories__icon" id='graphic' onClick={()=>dispatch({web:false,graphic:true,
                progress:false})}> 
                <AiOutlinePicture size={25} />
              </div>

              <div className="portfolio__categories__icon" id='progress' onClick={()=>dispatch({web:false,graphic:false,
                progress:true})}>
                <AiOutlineFieldTime size={25} />
              </div>
            </div>
          </div>

          <div className="col-12 row">
            {display.web ? WebData.map((web)=>(
                <PortfolioList cardImage={web.image} cardName={web.name} link={web.link} key={web.id}/>
              )) : ""}

            {display.graphic ? GraphicData.map((graphic)=>(
                <PortfolioModals modalImage={graphic.image} modalName={graphic.name} key={graphic.id}/>
              )) : ""}

            {display.progress ? WorkingonData.map((working)=>(
                <PortfolioList cardImage={working.image} cardName={working.name} link={working.link} key={working.id}/>
              )) : ""}
                

          </div>

        </div>
      </div>
    </div>
  )
}

export default Portfolio