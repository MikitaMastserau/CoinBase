import { Main } from "../Main";
import { Welcome } from "../Welcome";
import { Reviews } from "../Reviews";
import { Results } from "../Results";

export const HomeLayout = () => {
   return (
      <>
         <Main />
         <Welcome />
         <Results />
         <Reviews />
      </>
   )
};