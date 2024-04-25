import { Themes } from "@gui/fluent-ui-allure";

export const getThemeColor = (colorName: string) => {
    switch (colorName) {
        case "Cobalt":
            return Themes.Cobalt
        case "Teal":
            return Themes.Teal
        case "Ochre":
            return Themes.Ochre
        case "Violet":
            return Themes.Violet
        case "Magenta":
            return Themes.Magenta
        case "Lavender":
            return Themes.Lavender
        case "Pewter":
            return Themes.Pewter
        case "Mint":
            return Themes.Mint
        default:
            return Themes.Cobalt
    }

 }