import { TitleText } from "../../../../components/Header/Typography";
import { useCart } from "../../../../Hook/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";

import { DetailContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffes () {
    const {cartItems} = useCart();
    return (
        <SelectedCoffeesContainer >
            <TitleText size="xs" color="subtitle">
            Cafés selecionados
            </TitleText>

            <DetailContainer>
                {cartItems.map(item =>(
                    <CoffeeCartCard key={item.id} coffee={item}/>
                ))}
            
            

            <ConfirmationSection />
            </DetailContainer>
        </SelectedCoffeesContainer>
    )
}