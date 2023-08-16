import mainImage from "static/images/mainImage.png";

import styles from "./styles.module.scss";

export const Main = () => {
   return (
      <main className={styles.main}>
         <div className={styles.container}>
            <div className={styles.main__content}>
               <h1>
                  We provide easy solution to exchange your <span>Bitcoin/ GiftCard for money</span>
               </h1>
               <p>CoinBase is a platform for trading your bitcoin andgiftcard at the best rate, why not give us a trial.</p>
               <button>GET STARTED</button>
            </div>
            <img src={mainImage} alt="" />
         </div>
      </main>
   )
};