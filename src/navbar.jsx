
import { GiHamburgerMenu } from "react-icons/gi"; 
import { useState } from "react"; 
import { Link } from "react-router-dom"; 
import './styles/navbar.css';  

const Navbar = () => {     
  const [isOpen, setIsOpen] = useState(false);      

  const toggleMenu = () => {         
    setIsOpen(!isOpen);     
  }      

  return (         
    <div className='navbar'>                 
      <h1>MYKEL<span>COCKTAIL</span></h1>                 
      <ul className={isOpen ? 'active' : ''}>                     
        <li><Link to="/">Home</Link></li>                     
        <li><Link to="/about">About</Link></li>                     
        <li><Link to="/blog">Blog</Link></li>                
        <li><Link to="/contact">Contact</Link></li>                 
      </ul>                 
      <div onClick={toggleMenu}>                     
        <GiHamburgerMenu size={24}/>                 
      </div>             
    </div>     
  ) 
}  

export default Navbar;