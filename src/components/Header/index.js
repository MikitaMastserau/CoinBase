import mainLogo from "static/icons/mainLogo.svg";
import { Dropdown } from "components/Dropdown";
import { Button } from "components/Button";

import styles from "./styles.module.scss";

export const Header = () => {
   return (
      <>
         <header className={styles.header}>
            <div className={styles.container}>
               <a className={styles.header__logo} href="/CoinBase"><img src={mainLogo} alt="" /></a>
               <div className={styles.header__menu}>
                  <nav>
                     <a href="/CoinBase">Home</a>
                     <a href="/CoinBase">About Us</a>
                     <a href="/CoinBase">Blog</a>
                     <a href="/CoinBase">Contact Us</a>
                  </nav>
                  <Dropdown />
                  <Button text={"login"} />
               </div>
            </div>
         </header>
      </ >
   );
};