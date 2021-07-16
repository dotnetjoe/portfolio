import { Typography } from '@material-ui/core';
import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import image from '../images/download.jpg'
const useStyles = makeStyles((theme) => ({
    Projects: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignContent: 'center'
    },
    ProjectChild: {
        marginBottom: "30px"
    },
    ProjectImage: {
        width: '100%',
        boxShadow:"0 0 30px rgb(0 0 0 / 40%)"
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

export default function Project() {
    const classes = useStyles()
    console.log(classes)
    return (
        <>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography className={classes.ProjectHeader} component="h2" variant="h2">
                            See All Projects
                        </Typography>
                    </Grid>
                    <Grid item xl={3} lg={6} md={6} sm={6} xs={12}>
                        <img className={classes.ProjectImage} src={image} alt="" />
                        <Typography className={classes.ProjectHeading} component="h2" variant="h5">
                            Project 01
                        </Typography>
                    </Grid>
                    <Grid item xl={3} lg={6} md={6} sm={6} xs={12}>
                        <img className={classes.ProjectImage} src={image} alt="" />
                        <Typography className={classes.ProjectHeading} component="h2" variant="h5">
                            Project 01
                        </Typography>
                    </Grid>
                    <Grid item xl={3} lg={6} md={6} sm={6} xs={12}>
                        <img className={classes.ProjectImage} src={image} alt="" />
                        <Typography className={classes.ProjectHeading} component="h2" variant="h5">
                            Project 01
                        </Typography>
                    </Grid>
                    <Grid item xl={3} lg={6} md={6} sm={6} xs={12}>
                        <img className={classes.ProjectImage} src={image} alt="" />
                        <Typography className={classes.ProjectHeading} component="h2" variant="h5">
                            Project 01
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
