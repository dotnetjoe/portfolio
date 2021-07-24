import React from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

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
    return (
        <>
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography className={classes.ProjectHeader} component="h2" variant="h2">
                            Social Activities
                        </Typography>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Box className={classes.SocialLinkBox}>

                            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <img className={classes.skillImage} src={facebook} alt="" />
                                <Typography className={classes.Typography} component="h4" variant="subtitled">
                                    Hello world
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Box className={classes.SocialLinkBox}>

                            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <img className={classes.skillImage} src={instagram} alt="" />
                                <Typography className={classes.Typography} component="h4" variant="subtitled">
                                    Hello world
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Box className={classes.SocialLinkBox}>

                            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <img className={classes.skillImage} src={github} alt="" />
                                <Typography className={classes.Typography} component="h4" variant="subtitled">
                                    Hello world
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Box className={classes.SocialLinkBox}>

                            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <img className={classes.skillImage} src={linkedin} alt="" />
                                <Typography className={classes.Typography} component="h4" variant="subtitled">
                                    Hello world
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}