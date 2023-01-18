import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { TitleText } from "../../../../components/Header/Typography";
import { SectionTitle } from "../SectionTitle";
import { AdressForm } from "./AddressForm";
import { PaymentMethodOption } from "./PaymentMethodOption";
import { CompleteOrderFormsContainer, FormsSectionContainer } from "./styles";



export function CompleteOrderForm (){
    const { colors } = useTheme();
    
    return(
        <CompleteOrderFormsContainer>
            <TitleText size="xs" color="subtitle">
                Complete seu pedido
            </TitleText>

            <FormsSectionContainer>
            <SectionTitle 
            title="endereço de entrega" 
            subtitle="Informe o endereço onde deseja receber seu pedido"
            icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]} />}
            />

            <AdressForm />
            </FormsSectionContainer>

            <FormsSectionContainer>
            <SectionTitle 
            title="Pagamento" 
            subtitle="o pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon={<CurrencyDollar size={22} color={colors["brand-purple"]} />}
            />
            
            <PaymentMethodOption />
            </FormsSectionContainer>
        </CompleteOrderFormsContainer>
    )
}