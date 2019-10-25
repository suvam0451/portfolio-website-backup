import Typography from "typography"
import theme from "typography-theme-bootstrap"
import Ocean from "typography-theme-ocean-beach"
// import { lookup } from "dns"

// theme.overrideStyles = ({rhythm, scale}, options) => {
//    return {
//        "h1, h2, h3": {
//            ...scale(1 / 6),
//            fontWeight: `normal`,
//            color: `#999`,
//            lineHeight: `1.2`,
//        },
//        img: {
//            borderRadius: `2px`,
//            margin: `0`
//        }
//    }
// }

const modifiedTheme = {
    baseFontSize: "16px",
    baseLineHeight: 1.666,
    headerFontFamily: [
        "Avenir Next",
        "Helvetica Neue",
        "Segoe UI",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      bodyFontFamily: ["Georgia", "serif"],
}

const typography = new Typography(modifiedTheme, Ocean)

// Back out the below once Typography is upgraded for es6
export default typography

export const rhythm = typography.rhythm
export const scale = typography.scale
export const options = typography.options