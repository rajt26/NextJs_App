import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        width: `100%`,
        position: "relative",
        overflow: "hidden",
        marginTop: "6em",
        padding: "2em 0 ",
    },
    link: {
        fontSize: "1.25em",
        color: "#fff",
        "&:hover": {
            color: theme.palette.info.main,
        },
    },
    copyLight: {
        color: "#fff",
        fontSize: "1em",
        "&:hover": {
            color: theme.palette.info.main,
        },
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">

                <Grid
                    item
                    container
                    component={"a"}
                    target="_blank"
                    rel="noreferrer noopener"
                    justifyContent="center"
                >
                    <Typography className={classes.copyLight}>
                        &copy;Raj
                    </Typography>
                </Grid>
            </Container>
        </footer >
    );
};

export default Footer;
