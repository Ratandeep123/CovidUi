import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import illustarion from '../img/illustration.png';
import Hero from '../img/hero_1.jpg';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    img: {
        marginTop: "5%",
        width: "60%",
        marginRight: "11%",
        // borderBottomRightRadius: "66%"
    },
    lilAbout: {
        color: "blue",
        marginTop: "10%",
        fontSize: "15px",
        fontWeight: 600,
        fontFamily: "italic",
    },
    bigAbout: {
        color: "#4246d2",
        marginTop: "1%",
        fontSize: "40px",
        fontWeight: 900,
        fontFamily: "italic", marginLeft: "15%"
    },
    para: {
        marginLeft: "45%",
        marginTop: "2%"
    },
    btn: {
        marginLeft: "15%",
        marginTop: "9%",
        borderRadius: "20px"
    },
    midImage: {
        marginTop: "4%"
    },
    image: {
        width: "600px",
        height: "350px",
        marginLeft: "29%",
        marginTop: "3%",
        // borderBottomLeftRadius: "10px"
        borderRadius: "10px"
    }, btnMore: {
        float: "left",
        marginLeft: "13%",
        marginTop: "9%",
        borderRadius: "20px"
    },

}));

function BackImg() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={""} style={{ backgroundColor: "#ebe7ee", borderBottomLeftRadius: "440px", height: "436px" }}>
                {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ backgroundColor: "blue" }}> */}
                <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                    <div className={classes.lilAbout}><span className={classes.header}>ABOUT</span></div>
                    <div className={classes.bigAbout}><span>About Us</span></div>
                    <div className={classes.para}>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a, nulla incidunt eaque sit praesentium porro!
                        </span>
                    </div>
                    <Button variant="contained" color="primary" href="#contained-buttons" className={classes.btn}>
                        HOW TO PREVENT
                    </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                    <img src={illustarion} className={classes.img} />
                </Grid>
                {/* </Grid> */}
            </Grid>
            <Grid container className={classes.midImage}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <img src={Hero} className={classes.image} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className={classes.heading}>
                        <h3 style={{ textAlign: "left", color: "#4246d2", fontWeight: "600", fontFamily: "italic", marginLeft: "12%", fontSize: "xx-large" }}>What is CoronaVirus ?</h3>
                    </div>
                    <span style={{ color: "grey", marginLeft: "6%", textAlign: "left" }}>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.Ex officia quas, modi sit eligendi numquam!</span>
                    {/* <div className="">
                        Lorem ipsum dolor sit amet
                    </div>
                    <div>
                        Consectetur adipisicing elit
                    </div>
                    <div>
                        Consectetur adipisicing elit
                    </div> */}
                    <Button variant="contained" color="primary" href="#contained-buttons" className={classes.btnMore}>
                        Learn More
                    </Button>
                </Grid>
            </Grid>
        </div >
    );
}
export default BackImg;