import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    link: {
        textDecoration: "none"
    },
    card: {
        border: "1px solid #f3f4ed",
        borderRadius: "4px",
        boxShadow: "6px 7px 6px -6px #f3f4ed"
    },
    cardMedia: {
        padding: "110px",
        "&:hover": {
            opacity: "0.5"
        }
    },
    category: {
        color: "#798777"
    },
    title: {
        marginTop: "10px"
    }
})

export default useStyles