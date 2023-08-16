import { GradientTitle } from "components/GradientTitle";
import { Line } from "../Line";

import tradeBitcoin from "static/icons/tradeBitcoin.svg";
import gift from "static/icons/gift.svg";

import styles from "./styles.module.scss";

export const Trade = () => {
   return (
      <section className={styles.trade}>
         <div className={styles.trade__card}>
            <GradientTitle text="Trade from anywhere" />
            <Line />
            <div className={styles.trade__btns}>
               <div className={styles.trade__borderWrap}>
                  <button><img src={tradeBitcoin} alt="" />Bitcoin</button>
               </div>
               <div className={styles.trade__borderWrap}>
                  <button><img src={gift} alt="" />Gift Cards</button>
               </div>
            </div>
         </div>
      </section>
   )
};