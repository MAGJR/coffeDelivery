import { Bank, CreditCard, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { PaymentMethodOptionsContainer } from "./styles";

export const paymentMethods = {
    credit: {
        label:"Cartão de Crédito",
        icon: <CreditCard size={16} />
    },
    debit:{
        label: "Cartão de Débito",
        icon: <Bank size={16}/>
    },
    money: {
        label: "Dinheiro",
        icon: <Money size={16} />
    }

}

export function PaymentMethodOption () {
    const { register } = useFormContext();

return (
    <PaymentMethodOptionsContainer>
        {Object.entries(paymentMethods).map(([key, {label, icon}]) => (
            <PaymentMethodInput 
            key={label}
            id={key}
            icon={icon}
            label={label}
            value={key}
            {...register("paymentMethod")}
            />
        ))}
    </PaymentMethodOptionsContainer>
)

}