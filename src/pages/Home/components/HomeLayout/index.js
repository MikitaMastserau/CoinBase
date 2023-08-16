import { Main } from "../Main";
import { Welcome } from "../Welcome";
import { Results } from "../Results";
import { Experience } from "../Experience";
import { Trade } from "../Trade";
import { Reviews } from "../Reviews";

export const HomeLayout = () => {
   return (
      <>
         <Main />
         <Welcome />
         <Results />
         <Experience />
         <Trade />
         <Reviews />
      </>
   )
};