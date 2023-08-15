import arrowIcon from "static/icons/arrowIcon.svg";

import styles from "./styles.module.scss";

export const Dropdown = () => {
   return (
      <div className={styles.dropdown}>
         <label>
            Sell Bitcoin/ Giftcard
            <img src={arrowIcon} alt="" />
            <input type="checkbox" />
            <div className={styles.dropdown__links}>
               <a href="/CoinBase">Sell Bitcoin</a>
               <a href="/CoinBase">Sell Giftcard</a>
            </div>
         </label>
      </div>
   );
}