import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import project1 from '../images/project1.PNG'
import project2 from '../images/project2.PNG'
import project3 from '../images/project3.jpg'
import project4 from '../images/project4.PNG'
import Aos from 'aos'
import 'aos/dist/aos.css'
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
        boxShadow: "0 0 30px rgb(0 0 0 / 40%)"
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
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <>
            <Container id="Project">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography className={classes.ProjectHeader} component="h2" variant="h2">
                            See All Projects
                        </Typography>
                    </Grid>
                    <Grid item xl={3} lg={6} md={6} sm={6} xs={12} data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-duration="2000">
                        <img className={classes.ProjectImage} src={project1} alt="" />
                        <Typography className={classes.ProjectHeading} component="h2" variant="h5">
                        HTML CSS portfolio
                        </Typography>
                    </Grid>
                    <Grid item xl={3} lg={6} md={6} sm={6} xs={12} data-Aos="fade-left" data-aos-anchor-placement="top-center" data-aos-duration="2000">
                        <img className={classes.ProjectImage} src={project3} alt="" />
                        <Typography className={classes.ProjectHeading} component="h2" variant="h5">
                            Local image
                        </Typography>
                    </Grid>
                    <Grid item xl={3} lg={6} md={6} sm={6} xs={12} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img className={classes.ProjectImage} src={project4} alt="" />
                        <Typography className={classes.ProjectHeading} component="h2" variant="h5">
                            local image
                        </Typography>
                    </Grid>
                    <Grid item xl={3} lg={6} md={6} sm={6} xs={12} data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img className={classes.ProjectImage} src={project2} alt="" />
                        <Typography className={classes.ProjectHeading} component="h2" variant="h5">
                           React Portfolio
                        </Typography>
                    </Grid>
                </Grid>
            </Container>    
        </>
    );
}
