import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core/Paper';
// import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Person1 from '../img/person_1.jpg';
import Person2 from '../img/person_2.jpg';
import Person3 from '../img/person_3.jpg';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Icon } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    header: {
        textAlign: "center",
        color: "#4246d2",
        fontSize: "xx-large",
        fontWeight: "600"
    },
    para: {
        color: "grey", marginTop: "1%"
    },
    img1: {
        borderRadius: "60px",
        float: "right",
        width: "200px"
    },
    img2: {
        borderRadius: "60px",
        textAlign: "center",
        width: "200px"
    },
    img3: {
        borderRadius: "60px",
        float: "left",
        width: "200px"
    },
    information: {
        display: "inline-block"
    },
    info: {
        marginTop: "10% !important",
        fontSize: "x-large"
    },
    lilPara: {
        color: "grey"
    },
    smallHeader: {
        color: "#4246d2",
        fontSize: "x-large"
    },
    icon: {
        display: "flex",
        marginLeft: " 14%"
    }
}));

function Team() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid conatiner style={{ marginTop: "5%" }}>
                <Grid item xs={12} sm={12} lg={12} md={12} xl={12}>
                    <div className={classes.header}>Team</div>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} md={12} xl={12}>
                    <div className={classes.para}>Lorem ipsum dolor sit amet, consectetur adip
                    isicing elit. Amet, voluptate!</div>
                </Grid>
            </Grid>
            <Grid container style={{ marginTop: "3%" }}>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className={classes.information}>
                        <img src={Person1} className={classes.img2} />
                        <div className={classes.info} style={{ marginTop: "3%" }}>
                            <span style={{ marginTop: "12% !important", color: "#4246d2" }}> jane Smith</span>

                        </div>
                        <div className={classes.lilPara}>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                        <div className={classes.smallHeader}>
                            <h5>Connect To Social</h5>
                        </div>
                        <div className={classes.icon}>
                            <InstagramIcon style={{ marginleft: "10%", marginRight: "15%" }} />
                            <FacebookIcon style={{ marginleft: "20%", marginRight: "15%" }} />
                            <LinkedInIcon style={{ marginleft: "20%", marginRight: "15%" }} />
                            <TwitterIcon style={{ marginleft: "20%", marginRight: "" }} />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className={classes.information}>
                        <img src={Person2} className={classes.img2} />
                        <div className={classes.info} style={{ marginTop: "3%" }}>
                            <span style={{ marginTop: "12% !important", color: "#4246d2" }}> jane Smith</span>
                        </div>
                        <div className={classes.lilPara}>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                        <div className={classes.smallHeader}>
                            <h5>Connect To Social</h5>
                        </div>
                        <div className={classes.icon}>
                            <InstagramIcon style={{ marginleft: "10%", marginRight: "15%" }} />
                            <FacebookIcon style={{ marginleft: "20%", marginRight: "15%" }} />
                            <LinkedInIcon style={{ marginleft: "20%", marginRight: "15%" }} />
                            <TwitterIcon style={{ marginleft: "20%", marginRight: "" }} />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <div className={classes.information}>
                        <img src={Person3} className={classes.img2} />
                        <div className={classes.info} style={{ marginTop: "3%" }}>
                            <span style={{ marginTop: "12% !important", color: "#4246d2" }}> jane Smith</span>
                        </div>
                        <div className={classes.lilPara}>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                        <div className={classes.smallHeader}>
                            <h5>Connect To Social</h5>
                        </div>
                        <div className={classes.icon}>
                            <InstagramIcon style={{ marginleft: "10%", marginRight: "15%" }} />
                            <FacebookIcon style={{ marginleft: "20%", marginRight: "15%" }} />
                            <LinkedInIcon style={{ marginleft: "20%", marginRight: "15%" }} />
                            <TwitterIcon style={{ marginleft: "20%", marginRight: "" }} />
                        </div>
                        <br />
                    </div>

                </Grid>

            </Grid>

        </div >
    );
}
export default Team;