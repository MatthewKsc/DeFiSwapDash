import { SvgIconProps } from "@mui/material";
import { JSX } from "react/jsx-runtime";

export interface IDexInformationCard {
    title: string,
    value: string,
    description: string, 
}

export interface IFooterQuickLink {
    title: string,
    url: string,
}

export interface IFooterConnectWithUsIcon {
    label: string,
    url: string,
    icon: (props: SvgIconProps) => JSX.Element,
}