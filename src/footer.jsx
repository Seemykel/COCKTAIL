import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './styles/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p>At MYKEL-cocktail, we are passionate about the art of mixology and the joy that comes from crafting and savoring exceptional cocktails.</p>
                    </div>
                    
                    <div className="footer-section">
                        <h3>Contact:</h3>
                        <p>Phone: +1 728 205 4545</p>
                        <p>Email:mykel9@gmail.com</p>
                        <p>Miami beach</p>
                    </div>
                    
                    <div className="footer-section">
                        <h3>Follow Us</h3>
                        <div className="footer-social">
                            <a href="https://facebook.com" target="_blank">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://instagram.com" target="_blank" >
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://twitter.com/elonmusk" target="_blank">
                                <FaTwitter size={24}/>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="footer-disclaimer">
                    <p className="disclaimer">"Drink Responsibly" 18+</p>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; 2025 MYKEL cocktail. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;