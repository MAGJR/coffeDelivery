import { ReactNode } from "react"
import { RegularText } from "../../../../components/Header/Typography"
import { SectionTitleCotainer } from "./styles"


interface SectionTitleProps {
title: string,
subtitle: string,
icon: ReactNode
}

export function SectionTitle ({title, subtitle, icon} : SectionTitleProps){
    return(
        <SectionTitleCotainer>
            {icon}
            <div>
                <RegularText color="subtitle" >{title}</RegularText>
                <RegularText size="s" >{subtitle}</RegularText>
            </div>
        </SectionTitleCotainer>
    )
}