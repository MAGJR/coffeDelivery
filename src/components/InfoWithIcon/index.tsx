import { ReactNode } from "react";
import { IconContainer, ItemWithContainer } from "./styles";

interface InfoWithIconProps {
    icon: ReactNode; 
    text: String | ReactNode;
    iconBg: string;
};

export function IfonWithIcon ({icon, text, iconBg }: InfoWithIconProps) {
return(
    <ItemWithContainer>
        <IconContainer iconBg={iconBg}>{icon}</IconContainer>
        {typeof text === 'string' ? <p>{text}</p> : text}
    </ItemWithContainer>
);

}