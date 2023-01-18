import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../pages/home/components/CoffeCard";
import { produce } from "immer";
import { json } from "react-router-dom";


export interface CartItem extends Coffee {
    quantity: number,
}

interface CartContextType {
    cartItems: CartItem[];
    cartQuantity: number;
    addCoffeeToCart: (coffee: CartItem) => void;
    changeCartItemQuantity: (cartItemId: number, type: 'increase' | 'decrease') => void;
    removeCartItem: (cartItemId: number) => void;
    carItemsTotal: number;
}

interface CartContextProviderProps{
    children: ReactNode;
}


const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems"

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children} : CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>(() =>{
        const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
        if(storedCartItems){
            return JSON.parse(storedCartItems);

        }else{
            return []
        }
    })
  
    const cartQuantity = cartItems.length;

    const carItemsTotal = cartItems.reduce((total, cartItem) => { 
        return total + cartItem.price * cartItem.quantity;

    }, 0)

    function addCoffeeToCart (coffee: CartItem){
        const coffeeAlredyExistInCart = cartItems.findIndex(cartItems => cartItems.id === coffee.id
            );
        
            const newCart = produce(cartItems, (draft) => {
                if (coffeeAlredyExistInCart < 0){
                    draft.push(coffee);

                } else {
                    draft[coffeeAlredyExistInCart].quantity += coffee.quantity;

                }
            } )

            setCartItems(newCart);
    }
    
    function changeCartItemQuantity (cartItemId: number, type: 'increase' | 'decrease' ){
    const newCart = produce(cartItems, (draft) => {
    const coffeeExistInCard = cartItems.findIndex(cartItem => cartItem.id === cartItemId
        );

        if(coffeeExistInCard >= 0){
            const item = draft[coffeeExistInCard];
            draft[coffeeExistInCard].quantity = 
             type === 'increase' ? item.quantity + 1 : item.quantity -1;
        }
    
});

setCartItems(newCart);
    }

    function removeCartItem(cartItemId: number){
        const newCart = produce(cartItems, (draft) => {
        let coffeeExistInCard = cartItems.findIndex(cartItem => cartItem.id === cartItemId
            )
            if(coffeeExistInCard += 0 ){
                draft.splice(coffeeExistInCard, 1)
            }
        });
        setCartItems(newCart)
    }

    useEffect(() => {
        localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
    }, [cartItems]);

    return(
        <CartContext.Provider  value={{cartItems,
         cartQuantity,
          addCoffeeToCart,
          changeCartItemQuantity,
          removeCartItem,
          carItemsTotal,   
             }} >
            {children}
        </CartContext.Provider>
    )
}
