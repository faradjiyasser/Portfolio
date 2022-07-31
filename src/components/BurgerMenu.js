import { FaLinkedin, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const BurgerMenu = ({isMenuOpen, setMenuOpen}) => {

    function openInsta(){
        window.open("https://www.instagram.com/faradji_yasser/?hl=en");
        setMenuOpen(false)
    }
    function openFacebook(){
        window.open("https://www.facebook.com/salgado.925/");
        setMenuOpen(false)
    }
    function openLinkedIn(){
        window.open("https://dz.linkedin.com/in/yasser-faradji");
        setMenuOpen(false)
    }
  return (
    <div className="menu">
        <div className="menu__icon">
            <span className="menu__icon__child1"></span>
            <span className="menu__icon__child2"></span>
            <span className="menu__icon__child3"></span>
        </div>
        <div  className={isMenuOpen? "menu__list right-0"
        :"menu__list right-60"}>
              <div className="menu__list__items">
                    <Link className='menu__list__items__link' to={"/"}>
                        <li>HAVE AN ISSUE? </li>
                    </Link> 
                    <Link className='menu__list__items__link' to={"/"} onClick={openFacebook}>
                        <li><FaFacebookSquare size={15} className="mr-15 mb-03"/> FACEBOOK</li> 
                    </Link>                  
                    <Link className='menu__list__items__link' to={"/"} onClick={openInsta}>
                        <li><FaInstagram size={15} className="mr-15 mb-03"/> INSTAGRAM</li>
                    </Link>                 
                    <Link className='menu__list__items__link' to={"/"} onClick={openLinkedIn}>
                        <li><FaLinkedin size={15} className="mr-15 mb-03"/> LINKED-IN</li>
                    </Link>
              </div>

        </div>
        <div className={isMenuOpen? "menu__full height-100"
        :"menu__full"} onClick={()=>setMenuOpen(false)} ></div>
    </div>
  )
}

export default BurgerMenu