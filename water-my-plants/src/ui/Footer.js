import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {
    Typography,
    Grid,
} from "@material-ui/core/"

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundImage: theme.palette.primary.mainGradient,
        width: "100%",
        // zIndex: 1302,
        position: "fixed",
        textAlign: "center",
        paddingTop: "2rem",
        paddingBottom: "2rem"
    },
    copyright: {
        fontSize: "1.2rem",
        [theme.breakpoints.down("sm")] : {
            fontSize: "0.8rem"
        },
    },
}))

export default function Footer() {
    const classes = useStyles()

    return(
        <React.Fragment>
            <Grid container className={classes.idk}>
                <footer className={classes.footer}>
                    <Typography variant="subtitle2" className={classes.copyright}>&copy; 2022 Charlene Johnson</Typography>
                </footer>
            </Grid>
        </React.Fragment>
    )
}