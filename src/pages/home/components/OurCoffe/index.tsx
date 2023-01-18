import { TitleText } from "../../../../components/Header/Typography";
import { coffees } from "../../../../data/coffees";
import { CoffeCard } from "../CoffeCard";
import { CoffeeList, OurCoffeContainer } from "./styles";


export function OurCoffe() {
    return(
        <OurCoffeContainer className="container">
            <TitleText size='l' color='subtitle'>Nossos Cafés</TitleText>
            
            <CoffeeList>
               {coffees.map((coffee) => (
                <CoffeCard key={coffee.id}  coffee={coffee}/>
               ))}
            
            
            </CoffeeList>

        </OurCoffeContainer>
    );

}