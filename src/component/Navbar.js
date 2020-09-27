import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BackImg from '../component/backImg';
import Team from '../component/Team';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    mainColor: {
        backgroundColor: "#ebe7ee",
        [theme.breakpoints.down('md')]: {
            width: "710px !important"
        }
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    grid2: {
        display: "flex",
        height: "60px",
        marginLeft: "15%"
    },
    nav: {
        margin: "0% 4% 0% 4%",
        fontSize: "18px",
        color: "white",
        textDecoration: "none !important",
        fontFamily: "italic",
        marginTop: "1%"

    },
    logo: {
        fontSize: "18px",
        color: "black",
        textDecoration: "none",
        fontFamily: "italic",
        marginTop: "2%"
    },
    link: {
        textDecoration: "none",
        color: "black"
    }
}));

function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={""} className={classes.mainColor}>
                {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ backgroundColor: "blue" }}> */}
                <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                    <div className={classes.logo}>
                        Covid
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                    <div className={classes.grid2}>
                        <div className={classes.nav}>
                            <a href="">Home</a>
                        </div>
                        <div className={classes.nav}>
                            <a href="" className={classes.link}>prevention</a>
                        </div>
                        <div className={classes.nav}>
                            <a href="" className={classes.link}>Syptoms</a>
                        </div>
                        <div className={classes.nav}>
                            <a href="" className={classes.link}>Blog</a>
                        </div>
                        <div className={classes.nav}>
                            <a href="" className={classes.link}>Contact</a>
                        </div>
                        <div className={classes.nav}>
                            <a href="" className={classes.link}>Help</a>
                        </div>
                    </div>
                </Grid>
                {/* </Grid> */}
            </Grid>
            <BackImg />
            <Team />
        </div>
    );
}
export default Navbar;