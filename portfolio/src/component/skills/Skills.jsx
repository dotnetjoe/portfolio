import { Typography } from '@material-ui/core';
import React from 'react';
import { Container, Grid, makeStyles, Box } from '@material-ui/core';
import image from '../images/qwe.png'

const useStyles = makeStyles((theme) => ({

    SkillsHeading: {
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
    Container: {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '90vh',
        color: 'white',
        overflow: "hidden",
        background: `url(${image})`
        // background: `linear-gradient(rgba(5, 5, 5, 0.9), rgba(5, 5, 5, 0.9)), url(${image})`,   /* The least supported option. */
    },
}))

export default function Skills() {
    const classes = useStyles()
    console.log(classes)
    return (
        <>
            <Box className={classes.Container}>

                <Container>
                    <Grid container spacing={3} >
                        <Grid item xs={12}>
                            <Typography className={classes.SkillsHeading} component="h2" variant="h3">
                                Skill Experties
                            </Typography>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                            <Box textAlign="center">
                                <Typography component="h4" variant="h4">
                                    HTML5
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                            <Box textAlign="center">
                                <Typography component="h4" variant="h4">
                                    CSS3
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                            <Box textAlign="center">
                                <Typography component="h4" variant="h4">
                                    JavaScript
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12} >
                            <Box textAlign="center">
                                <Typography component="h4" variant="h4">
                                    React.Js
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                            <Box textAlign="center">
                                <Typography component="h4" variant="h4">
                                    HTML5
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                            <Box textAlign="center">
                                <Typography component="h4" variant="h4">
                                    CSS3
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                            <Box textAlign="center">
                                <Typography component="h4" variant="h4">
                                    JavaScript
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12} >
                            <Box textAlign="center">
                                <Typography component="h4" variant="h4">
                                    React.Js
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                            <Box textAlign="center">
                                <Typography component="h4" variant="h4">
                                    HTML5
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                            <Box textAlign="center">
                                <Typography component="h4" variant="h4">
                                    CSS3
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
                            <Box textAlign="center">
                                <Typography component="h4" variant="h4">
                                    JavaScript
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12} >
                            <Box textAlign="center">
                                <Typography component="h4" variant="h4">
                                    React.Js
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
