import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#fff"
        },
        text: {
            primary: "#373640"
        },
        background: {
            default: "#fff"
        }
    },
    typography: {
        fontFamily: "Inter"
    }
})

export default theme