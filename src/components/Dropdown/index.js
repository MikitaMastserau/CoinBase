import trigonIcon from "static/icons/trigonIcon.svg";

import styles from "./styles.module.scss";

export const Dropdown = () => {
   return (
      <div className={styles.dropdown}>
         <label>
            Sell Bitcoin/ Giftcard
            <img src={trigonIcon} alt="" />
            <input type="checkbox" />
            <div className={styles.dropdown__links}>
               <a href="/CoinBase">Sell Bitcoin</a>
               <a href="/CoinBase">Sell Giftcard</a>
            </div>
         </label>
      </div>
   );
}