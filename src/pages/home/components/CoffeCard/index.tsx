import { RegularText, TitleText } from "../../../../components/Header/Typography";
import { QuantityInput } from "../../../../components/QuantityInput";
import { AddCartWrapper,
     CardFooter,
      CoffeeCardContainer,
       Description,
        Name,
         Tags
         } from "./styles";
import {ShoppingCart} from 'phosphor-react'
import { formatMoney } from "../../../../utils/formattMoney";
import { useCart } from "../../../../Hook/useCart";
import { useState } from "react";




export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    photo: string;
    description: string;
    price: number;

}


interface CoffeeProps {
    coffee: Coffee;

}


export function CoffeCard ({ coffee }: CoffeeProps){
    const [quantity, setQuantity] = useState(1);

    function handleIncrease(){
        setQuantity(state => state +1)
    }

    function handleDecrease(){
        setQuantity(state => state -1)
    }

    const {addCoffeeToCart} = useCart();
    function handleAddToCart(){
        const coffeeToAdd = {
            ...coffee,
            quantity,
        };

        addCoffeeToCart(coffeeToAdd)
    }

    const FormatterPrice = formatMoney(coffee.price);
    return(
        <CoffeeCardContainer className="container">
            <img src={`/coffees/${coffee.photo}`} alt="" />
        <Tags>
            {coffee.tags.map(tag => (
                <span key={`${coffee.id}${tag}`}>{tag}</span>
            ))}
        </Tags>
        <Name> {coffee.name}</Name>
        <Description>{coffee.description}</Description>
        <CardFooter>
            <div>
                <RegularText size="s">$</RegularText>
                <TitleText size="m" color="text" as="strong">{FormatterPrice}</TitleText>
            </div>

            <AddCartWrapper>
                <QuantityInput 
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                quantity={quantity}
                />
                <button onClick={handleAddToCart}>
                <ShoppingCart weight="fill" size={22}/>
                </button>
            </AddCartWrapper>
        </CardFooter>
        </CoffeeCardContainer>
    );
}

