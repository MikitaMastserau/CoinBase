import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { Dropdown } from "components/Dropdown";
import { Button } from "components/Button";

import mainLogo from "static/icons/mainLogo.svg";

import styles from "./styles.module.scss";

export const Header = () => {
   const [open, setOpen] = useState(false);

   return (
      <header className={styles.header} id="header">
         <div className={styles.container}>
            <a className={styles.header__logo} href="#header"><img src={mainLogo} alt="" /></a>
            <div className={open ? [styles.header__menu, styles.header__activeMenu].join(" ") : styles.header__menu}>
               <nav>
                  <a href="#home" onClick={() => setOpen(!open)}>Home</a>
                  <a href="#about" onClick={() => setOpen(!open)}>About Us</a>
                  <a href="#blog" onClick={() => setOpen(!open)}>Blog</a>
                  <a href="#contact" onClick={() => setOpen(!open)}>Contact Us</a>
               </nav>
               <Dropdown />
               <Button text={"login"} />
            </div>
            <div className={styles.header__menuButton} onClick={() => setOpen(!open)}>
               {open ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
         </div>
      </header>
   );
};