import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
    card: {
        marginTop: "1.3rem",
        border: "none",
        borderRadius: "0",
        color: grey[800]
    },
    cardMedia: {
        padding: "60px",
        "&:hover": {
            opacity: "0.5"
        }
    },
    title: {
        textDecoration: "none",
        color: grey[800],
    },
    price: {
        marginTop: "8px"
    },
    bottomCard: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    bottomRightCard: {
        display: "flex",
        alignItems: "center",
    },
    divider: {
        margin: "0 6px",
    },
    qty: {
        color: grey[800],
        width: "30px",
    }
})

export default useStyles