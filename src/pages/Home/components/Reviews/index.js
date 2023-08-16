import { Line } from "../Line";

import bubble1 from "static/icons/bubble1.svg";
import bubble2 from "static/icons/bubble2.svg";
import stars from "static/icons/stars.svg";
import bitcoin from "static/icons/bitcoin.svg";

import styles from "./styles.module.scss";

export const Reviews = () => {
   return (
      <section className={styles.reviews}>
         <div className={styles.container}>
            <img className={styles.bubbleTop} src={bubble1} alt="" />
            <img className={styles.bubbleBottom} src={bubble2} alt="" />
            <h2>10,000 Satisfied clients around the world</h2>
            <Line />
            <p className={styles.reviews__text}>
               Yeah! we’re proud with numbers. We’ve helped thousands of clients
               all around the world with our bespoke service. Hover ontop of them
               pic to view their testimonials.
            </p>
            <div className={styles.reviews__bubbles}>
               <div className={styles.reviews__oval}></div>
               <div className={styles.reviews__oval}></div>
               <div className={styles.reviews__oval}></div>
               <div className={styles.reviews__oval}></div>
               <div className={styles.reviews__oval}></div>
               <div className={styles.reviews__oval}></div>
               <div className={styles.reviews__oval}></div>
               <div className={styles.reviews__oval}></div>
               <div className={styles.reviews__oval}></div>
               <div className={styles.reviews__oval}></div>
               <div className={styles.reviews__oval}></div>
               <div className={styles.reviews__oval}>
                  <div className={styles.reviews__comment}>
                     <div>
                        <p>Femi from Nigeria</p>
                        <img src={stars} alt="" />
                        <p>Wonderful service</p>
                        <p>Good deal and very wonderful service thank you.</p>
                     </div>
                     <img src={bitcoin} alt="" />
                  </div>
               </div>
               <div className={styles.reviews__oval}></div>
            </div>
         </div>
      </section>
   )
};