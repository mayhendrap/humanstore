import { makeStyles } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"

const useStyles = makeStyles({
    appBar: {
        borderBottom: "1px solid #f5f5f5",
        backgroundColor: "#fff",
    },
    wrapperHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    storeName: {
        textDecoration: "none",
        color: grey[800]
    },
    rightHeader: {
        display: "flex",
        alignItems: "center"
    },
    cartWrapper: {
        display: "flex",
        position: "relative",
        marginRight: "1rem"
    },
    cartLogo: {
        color: grey[800]
    },
    countCart: {
        fontSize: "15px",
        position: "absolute",
        right: "0",
        top: "0",
        backgroundColor: grey[700],
        color: "#fff",
        padding: "0.5px 6px",
        borderRadius: "70%"
    },
    accountIcon: {
        color: grey[800],
    },
    accountWrapper: {
        marginLeft: "0.6rem"
    },
    accountName: {
        color: grey[800]
    },
    auth: {
        textDecoration: "none",
        color: grey[800],
        marginLeft: "0.5rem"
    },
    menuDropdown: {
        "& .MuiMenu-paper": {
            borderRadius: "0",
            marginTop: "40px"
        }
    }
})

export default useStyles