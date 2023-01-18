import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { CompleteOrderFormsContainer } from "./components/CompleteOrderForm/styles";
import { SelectedCoffes } from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";
import * as zod from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm, FormProvider} from "react-hook-form"

enum PaymentMethod {
    credit = "credit",
    debit = "debit",
    money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe o Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethod, {
    errorMap:() =>{
        return {message: "Informe o método de pagamento"}
    }
  })
  
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema >

type confirmOrderFormData = OrderData


export function CompleteOrderPage (){
const confirmOrderForm = useForm<confirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema)
});

const {handleSubmit} = confirmOrderForm;

function handleConfirmOrder(data: confirmOrderFormData){
console.log(data)
}
    return(
        <FormProvider {...confirmOrderForm}>
       <CompleteOrderContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
        <CompleteOrderForm />
        <SelectedCoffes />
       </CompleteOrderContainer>
       </FormProvider>
    )
}