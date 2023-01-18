import { RegularText, TitleText } from "../../components/Header/Typography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import  confirmedOrderIllustration from "../../assets/confirmed-order.svg"
import {MapPin, Clock, CurrencyDollar} from "phosphor-react"
import { useTheme } from "styled-components";
import { IfonWithIcon } from "../../components/InfoWithIcon";

export function OrderConfirmed() {
   const {colors} = useTheme();

   return(
    <OrderConfirmedContainer className="container">
        <div>
         <TitleText size="l">Uhu! pedido confirmado</TitleText>
         <RegularText size="l" color="subtitle">
            Agora é só aguardar que logo o café chegará até você
         </RegularText>
         </div>

         <section>
         <OrderDetailsContainer> 
         <IfonWithIcon
         icon ={<MapPin weight="fill"/>}
         iconBg = {colors["brand-purple"]}
         text= {
            <RegularText>
               Entrega em <strong>Rua Jõao Daniel Martinelli, 102</strong>
               <br />
               Farrapos Porto Alegre, RS
            </RegularText>
         }
         />
         <IfonWithIcon
         icon ={<Clock weight="fill"/>}
         iconBg = {colors["brand-yellow"]}
         text= {
            <RegularText>
               Previsão de entrega<br /> <strong>20min - 30min </strong>
               
               
            </RegularText>
         }
         />
         <IfonWithIcon
         icon ={<CurrencyDollar weight="fill"/>}
         iconBg = {colors["brand-yellow-dark"]}
         text= {
            <RegularText>
               Pagamento na entrega<br /> <strong>Cartão de crédito</strong>
               
               
            </RegularText>
         }
         />
         </OrderDetailsContainer>

         <img src={confirmedOrderIllustration} alt="" />
         </section>
        
    </OrderConfirmedContainer>
   )}