import { GradientTitle } from "components/GradientTitle";
import { Line } from "../../../../components/Line";

import appStore from "static/images/appStore.png";
import googlePlay from "static/images/googlePlay.png";
import bubble2 from "static/icons/bubble2.svg";
import phone1 from "static/images/phone1.png";
import phone2 from "static/images/phone2.png";

import styles from "./styles.module.scss";

export const Download = () => {
   return (
      <section className={styles.download}>
         <div className={styles.download__hat}>
            <GradientTitle text="Download our app" />
            <Line />
            <p>Discover exclusive deals and discounts with our mobile experience.</p>
         </div>
         <div className={styles.download__content}>
            <div className={styles.download__btns}>
               <button><img src={appStore} alt="" /></button>
               <button><img src={googlePlay} alt="" /></button>
            </div>
            <div className={styles.download__phones}>
               <img src={bubble2} alt="" />
               <img src={phone1} alt="" />
               <img src={phone2} alt="" />
            </div>
         </div>
      </section>
   )
};