import { RegularText } from "../../../../components/Header/Typography";
import { QuantityInput } from "../../../../components/QuantityInput";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import {Trash} from 'phosphor-react'
import { CartItem } from "../../../../Contexts";
import { formatMoney } from "../../../../utils/formattMoney";
import { useCart } from "../../../../Hook/useCart";


interface CoffeeCardProps{
    coffee: CartItem;
}


export function CoffeeCartCard({coffee}: CoffeeCardProps) {
    const { changeCartItemQuantity,  removeCartItem } =useCart ();

    function handleIncrease() {
        changeCartItemQuantity(coffee.id, "increase");
    }

    function handleDecrease() {
        changeCartItemQuantity(coffee.id, "decrease");
    }

    function handleRemove(){
        removeCartItem(coffee.id);
    }
    
    const coffeeTotal = coffee.price * coffee.quantity

    const formatterPrice = formatMoney(coffeeTotal);
    return(
        <CoffeeCartCardContainer>
            <div>
            <img src={`/coffees/${coffee.photo}`}  />
            <div>
                <RegularText color="subtitle">{coffee.name}</RegularText>
                <ActionsContainer>
                    <QuantityInput 
                    size="small" 
                    onDecrease={handleDecrease}
                    onIncrease={handleIncrease}
                    quantity={coffee.quantity} 
                    />

                    <RemoveButton onClick={ handleRemove}>
                        <Trash size={16}/>
                        REMOVER
                    </RemoveButton>
                </ActionsContainer>
            </div>
            </div>
            
            <p>{formatterPrice}</p>
        </CoffeeCartCardContainer>
    )

}