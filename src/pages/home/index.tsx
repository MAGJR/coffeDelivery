import { useCart } from "../../Hook/useCart";
import { CoffeCard } from "./components/CoffeCard";
import { Intro } from "./components/intro";
import { OurCoffe } from "./components/OurCoffe";
import { HomeContainer } from "./styles";


export function HomePage(){
    return(
        <HomeContainer>
       <Intro />
       <OurCoffe />
       </HomeContainer>
    )
}