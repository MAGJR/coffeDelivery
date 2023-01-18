import { useContext } from "react";
import { CartContext } from "../Contexts";

export function useCart(){
const context = useContext(CartContext)
return context;
}