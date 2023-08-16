import styles from "./styles.module.scss";

export const Results = () => {
   return (
      <section className={styles.money}>
         <div className={styles.money__info}>
            <div className={styles.money__tab}>
               <h4>OUR RATES</h4>
               <hr />
               <ul>
                  <li>Etiam tempus quis enim in imperdiet.</li>
                  <li>Duis auctor rhoncus leo non tristique.</li>
                  <li>Donec vitae consequat velit.</li>
                  <li>Nulla eget sollicitudin mauris.</li>
                  <li>Praesent pretium bibendum euismod.</li>
                  <li>Fusce et urna dolor.</li>
               </ul>
            </div>
            <div className={styles.money__tab}>
               <h4>OUR RESERVES</h4>
               <hr />
               <ul>
                  <li>Pellentesque pellentesque placerat luctus.</li>
                  <li>Duis mollis molestie magna quis elementum.</li>
                  <li>Suspendisse potenti.</li>
                  <li>Cras commodo a purus sit amet efficitur.</li>
                  <li>Donec ac neque nibh.</li>
                  <li>Mauris sit amet viverra neque.</li>
               </ul>
            </div>
            <div className={styles.money__tab}>
               <h4>LATEST EXCHANGES</h4>
               <hr />
               <ul>
                  <li>Quisque tristique lacinia gravida.</li>
                  <li>In at molestie felis.</li>
                  <li>Morbi ac convallis nibh.</li>
                  <li>Duis fermentum ultrices iaculis.</li>
                  <li>Sed aliquet eget sem id fermentum.</li>
                  <li>Phasellus interdum eget magna vel tristique.</li>
               </ul>
            </div>
         </div>
      </section>
   )
};