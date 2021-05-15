import { grey } from "@material-ui/core/colors"

const styles = {
    wrapper: {
        marginTop: "1.5rem",
    },
    breadcrumbs: {
        marginBottom: "1.5rem",
    },
    breadcrumbsLink: {
        textDecoration: "none",
        color: grey[800]
    },
    cardContent: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardMedia: {
        width: "100%",
        border: "1px solid grey",
        borderRadius: "3px",
    },
    category: {
        color: "grey"
    },
    title: {
        fontWeight: "bold",
        marginTop: "0.8rem"
    },
    desc: {
        marginTop: "1.2rem",
        flexGrow: "1"
    },
    button: {
        backgroundColor: grey[800],
        color: "#fff",
        borderRadius: "3px",
        marginTop: "1.5rem",
        width: "100%",
        "&:hover": {
            backgroundColor: grey[700]
        }
    },
    loginLink: {
        textDecoration: "none",
        color: "#fff"
    }
}

export default styles