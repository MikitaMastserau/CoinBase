import mainLogo from "static/icons/mainLogo.svg";
import { Dropdown } from "components/Dropdown";
import { Button } from "components/Button";

import styles from "./styles.module.scss";

export const Header = () => {
   return (
      <header className={styles.header} id="header">
         <div className={styles.container}>
            <a className={styles.header__logo} href="#header"><img src={mainLogo} alt="" /></a>
            <div className={styles.header__menu}>
               <nav>
                  <a href="#header">Home</a>
                  <a href="#header">About Us</a>
                  <a href="#header">Blog</a>
                  <a href="#header">Contact Us</a>
               </nav>
               <Dropdown />
               <Button text={"login"} />
            </div>
         </div>
      </header>
   );
};