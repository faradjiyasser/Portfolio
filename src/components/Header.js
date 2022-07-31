import React from 'react'


const Header = () => {
  const bg = "/assets/images/header/headerbg.jpg";
  const pic = "/assets/images/header/headerpic3.jpg";
  return (
    <div className='header'>
      <div className="header__image">
        <img src={bg} alt={bg} />
      </div>
        <div className="container">
          <div className="row">
            <div className="header__body">
              <div className="col-12">
                <div className="header__body__pic">
                  <img src={pic} alt={pic} />
                </div>
              </div>
              <div className="col-12">
                <h2 className="header__body__name">
                  FARADJI Yasser
                </h2>
              </div>
              <div className="col-12">
                <p className="header__body__role">
                  Web/Graphic designer
                </p>
              </div>

              <div className="col-12 row justify">
                <div className="col-3">
                  <h2 className="header__body__number justify">
                    05
                  </h2>
                  <h2 className="header__body__text justify">
                    Web-projects 
                  </h2>
                </div>
                <div className="col-3">
                  <h2 className="header__body__number justify">
                    13
                  </h2>
                  <h2 className="header__body__text justify">
                    Graphic-projects 
                  </h2>
                </div>
                <div className="col-3">
                  <h2 className="header__body__number justify">
                    03
                  </h2>
                  <h2 className="header__body__text justify">
                    Working-on 
                  </h2>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header