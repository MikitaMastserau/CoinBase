import { GradientTitle } from "components/GradientTitle";
import { Line } from "../../../../components/Line";

import styles from "./styles.module.scss";
import { Button } from "components/Button";

export const Subscribe = () => {
   return (
      <section className={styles.subs} id="contact">
         <GradientTitle text="Subscribe our newsletter" />
         <Line />
         <p>Subscribe to our newsletter for daily/weekly update of our products and services.</p>
         <div className={styles.subs__email}>
            <div><input type="email" placeholder="EMAIL"></input></div>
            <Button text="Subcribe" />
         </div>
      </section>
   )
};