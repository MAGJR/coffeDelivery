import { useState } from "react";
import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Header/Typography";
import { useCart } from "../../../../Hook/useCart";
import { formatMoney } from "../../../../utils/formattMoney";
import { ConfirmationSectionContainer } from "./styles";


const DELIVERY_PRICE = 3.5;

export function ConfirmationSection () {
    const {carItemsTotal, cartQuantity} = useCart();

    const cartTotal = DELIVERY_PRICE + carItemsTotal;

    const formattedItemsTotal = formatMoney(carItemsTotal);

    const formattedCartTotal = formatMoney(cartTotal);

    const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);


    return(
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="s">Total de itens</RegularText>
                <RegularText >{formattedItemsTotal}</RegularText>
            </div>
            <div>
                <RegularText size="s">Entrega</RegularText>
                <RegularText >{formattedDeliveryPrice}</RegularText>
            </div>

            <div>
              <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
              <RegularText weight="700" color="subtitle" size="l">{formattedCartTotal}</RegularText>    
            </div>
            <Button text="Confirmar pedido" disabled={cartQuantity <= 0} type="submit"/>
        </ConfirmationSectionContainer>
    )

}