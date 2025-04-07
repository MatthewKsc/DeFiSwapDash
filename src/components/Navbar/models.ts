import { JSX } from "react";

export interface INavbarLink {
    label: string,
    to: string,
    icon: JSX.Element,
    disabled: boolean,
    onlyMobileView: boolean,
}