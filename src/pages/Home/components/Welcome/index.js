import { GradientTitle } from "components/GradientTitle";
import { Line } from "../../../../components/Line";
import { Button } from "components/Button";

import welcomeImage from "static/images/welcomeImage.png";

import styles from "./styles.module.scss";

export const Welcome = () => {
   return (
      <section className={styles.welcome} id="about">
         <div className={styles.container}>
            <img src={welcomeImage} alt="" />
            <div className={styles.welcome__content}>
               <GradientTitle text="Welcome to CoinBase" />
               <Line />
               <p>We have the best rates . Simply start your exchange right now. Sign up for our Affiliate program and earn commission from each exchange. The earnings are credited in your account instantly and can be withdrawn right away. Also note some exchange directions are hidden for unregistered user. To ensure to have access to all our exchange directions and benefits kindly sign up and verify your identity.</p>
               <Button text="DISCOVER" />
            </div>
         </div>
      </section>
   )
};