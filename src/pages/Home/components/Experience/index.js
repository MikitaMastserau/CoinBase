import { GradientTitle } from "components/GradientTitle";
import { Line } from "../Line";
import { Button } from "components/Button";

import expImage from "static/images/expImage.png";

import styles from "./styles.module.scss";

export const Experience = () => {
   return (
      <section className={styles.exp}>
         <div className={styles.container}>
            <div className={styles.exp__content}>
               <div><GradientTitle text="Great experience with CoinBase" /></div>
               <Line />
               <p>CoinBase is an online site and a p2admin platform that allows users to buy, sell and/ or exchange digital and fiat assets safely. Owned and managed by CoinBase Business Services established and Incoperated in Nigeria.</p>
               <Button text="DISCOVER" />
            </div>
            <img src={expImage} alt="" />
         </div>
      </section>
   )
};