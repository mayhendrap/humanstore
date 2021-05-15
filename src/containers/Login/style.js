import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
    root: {
        marginBottom: "1rem",
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: grey[600]
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: grey[600]
        },
        "& .MuiOutlinedInput-root .Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: grey[600],
        },
        "& .MuiFormLabel-root": {
            color: grey[700],
        },
        "& .MuiFormHelperText-root": {
            color: "red"
        }
    },
    wrapperForm: {
        width: "100%",
    },
    form: {
        margin: "4rem auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "400px",
        backgroundColor: "#fff",
        padding: "50px",
    },
    button: {
        "& > span.MuiButton-label": {
            color: "#fff",
        },
        backgroundColor: grey[800],
        padding: "12px 0",
        "&:hover": {
            backgroundColor: grey[700],
        },
    }
})

export default useStyles