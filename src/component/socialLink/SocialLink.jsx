import React, { useEffect } from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import Aos from 'aos'
import 'aos/dist/aos.css'
const useStyles = makeStyles((theme) => ({

    SocialLinkBox: {
        height: "200px",
        marginTop: "20px"
    },
    Typography: {
        position: 'relative',
        top: "50%"
    },
    skillImage: {
        width: "30px",
        height: "30px",
        marginRight: '20px'
    },
    ProjectHeader: {
        margin: '50px',
        textAlign: 'center',
        fontFamily: 'Otomanopee One, sans-serif',
        [theme.breakpoints.down('md')]: {
            fontSize: '2.5rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem'
        },
    },
    ProjectHeading: {
        margin: '20px',
        textAlign: 'center',
        fontFamily: "Yomogi, cursive"
    },


}))
export default function SocialLink() {
    const classes = useStyles()
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <>
            <Container id="SocialSites">
                <Grid container>
                    <Grid item xs={12}>
                        <Typography className={classes.ProjectHeader} component="h2" variant="h2">
                            Social Activities
                        </Typography>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <Box className={classes.SocialLinkBox}>

                            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <img className={classes.skillImage} src={facebook} alt="" />
                                <Typography className={classes.Typography} component="h4" variant="subtitled">
                                    Muhammad Zubair
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <Box className={classes.SocialLinkBox}>

                            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <img className={classes.skillImage} src={instagram} alt="" />
                                <Typography className={classes.Typography} component="h4" variant="subtitled">
                                    instagram.com/zubair12369
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <Box className={classes.SocialLinkBox}>

                            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <img className={classes.skillImage} src={github} alt="" />
                                <Typography className={classes.Typography} component="h4" variant="subtitled">
                                    github.com/zubairkhan1234
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <Box className={classes.SocialLinkBox}>

                            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <img className={classes.skillImage} src={linkedin} alt="" />
                                <Typography className={classes.Typography} component="h4" variant="subtitled">
                                    Muahmmad Zubair
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}