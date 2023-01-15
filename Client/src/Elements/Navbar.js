import React,{ useState } from "react";
import '../Assets/Navbar.css';
import { click } from '@testing-library/user-event/dist/click'
import {Link} from 'react-router-dom'

function Navbar() {
    const [click , setClick]= useState(false);
    const [button , setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
      if(window.innerWidth <= 960){
        setButton(false);
  
      }else{
        setButton(true)
      }
    };
  
    window.addEventListener('resize', showButton)
  
  
    return (
      <>
          <nav className="navbar">
              <div className="navbar-container">
                 <Link to='/' className="navbar-logo">
                  Manage It 
                  </Link> 
                  <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                     <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                          Home
                        </Link>
                     </li>
                     {/* <li className="nav-item">
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                        </Link
                      </li> */}
                    
                    
                    
                     <li className="nav-item">
                         <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                           Blog
                         </Link>
                      </li>
                     {/* <li className="nav-item">
                        <NavLink to='/Footer' className='nav-links' onClick={closeMobileMenu}>
                          Contact
                   </NavLink>
                     </li> */}
                     {/* <li className="nav-item">
                        <Link to='/Blogs' className='nav-links' onClick={closeMobileMenu}>
                          Help
                        </Link>
                     </li> */}
                     <li className="nav-item">
                        <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>
                          Dashboard
                        </Link>
                     </li>
                  </ul>
                  {/* {button && <button buttonStyle='btn--outline'>EXPLORE</button>} */}
              </div>
          </nav>
      </>
    )
  }
  
  export default Navbar;