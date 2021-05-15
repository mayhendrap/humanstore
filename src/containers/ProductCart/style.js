import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
    cartWrapper: {
        marginTop: "2rem",
    },
    card: {
        border: "1px solid #f3f4ed",
        borderRadius: "4px",
        boxShadow: "6px 7px 6px -6px #f3f4ed",
        padding: "20px",
        color: grey[800],
    },
    cardHeaderText: {
        fontSize: "17px",
        marginBottom: "1.4rem"
    },
    divider: {
        margin: "0.7rem 0"
    },
    totalPriceBetween: {
        display: "flex",
        justifyContent: "space-between"
    },
    totalPrice: {
        fontSize: "17px",
    },
    button: {
        backgroundColor: grey[800],
        color: "#fff",
        marginTop: "1rem",
        borderRadius: "3px",
        "&:hover": {
            backgroundColor: grey[700]
        }
    }
})

export default useStyles