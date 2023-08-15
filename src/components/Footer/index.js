import footerLogo from "static/icons/footerLogo.svg";
import googleIcon from "static/icons/googleIcon.svg";
import facebookIcon from "static/icons/facebookIcon.svg";
import twitterIcon from "static/icons/twitterIcon.svg";
import instagramIcon from "static/icons/instagramIcon.svg";

import styles from "./styles.module.scss";

export const Footer = () => {
   return (
      <footer className={styles.footer} id="footer">
         <div className={styles.container}>
            <div className={styles.footer__info}>
               <img src={footerLogo} alt="" />
               <p>Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum</p>
               <div className={styles.footer__media}>
                  <a href="#footer"><img src={googleIcon} alt="" /></a>
                  <a href="#footer"><img src={facebookIcon} alt="" /></a>
                  <a href="#footer"><img src={twitterIcon} alt="" /></a>
                  <a href="#footer"><img src={instagramIcon} alt="" /></a>
               </div>
               <p>© 2019  Designed by Cr8tiv_yemmy</p>
            </div>
            <div className={styles.footer__links}>
               <h3>CoinBase Links</h3>
               <a href="#footer">Home</a>
               <a href="#footer">About Us</a>
               <a href="#footer">Blog</a>
               <a href="#footer">Sell</a>
               <a href="#footer">Contact Us</a>
            </div>
            <div className={styles.footer__contact}>
               <h3>Contact Us</h3>
               <a href="tel:+234137632128" target="_blanc">(+234) 137632128</a>
               <a href="mailto:Coinbase@yahoo.com" target="_blanc">Coinbase@yahoo.com</a>
               <a href="https://www.google.com/maps" target="_blanc">Address goes here</a>
               <a href="#footer">Download Our App</a>
            </div>
            <div className={styles.footer__insta}>
               <h3>CoinBase Instagram</h3>
               <div className={styles.footer__photos}>
                  <div><button>+</button></div>
                  <div><button>+</button></div>
                  <div><button>+</button></div>
                  <div><button>+</button></div>
                  <div><button>+</button></div>
                  <div><button>+</button></div>
                  <div><button>+</button></div>
                  <div><button>+</button></div>
               </div>
            </div>
         </div>
      </footer>
   );
};