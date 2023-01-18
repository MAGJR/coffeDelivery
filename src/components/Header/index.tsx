import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles";
import coffeLogoImg from '../../assets/coffe-delivery-logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../Hook/useCart";


export function Header(){
    const {cartQuantity} = useCart();
    return(

        <HeaderContainer>
        <div className="container">
            <NavLink to="/">
            <img src={coffeLogoImg}  />
            </NavLink>
        <HeaderButtonContainer >
        
        <HeaderButton variant="purple"> 
        <MapPin size={24} weight='fill'/>
            porto alegre, RS
        </HeaderButton>
        
        <NavLink to="/completeOrder">
        <HeaderButton variant="yellow">
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
        <ShoppingCart size={24} weight='fill'/>
        </HeaderButton>
        </NavLink>
        </HeaderButtonContainer>
        </div>
        
        </HeaderContainer>
    )
}