import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
//import { Container } from '@material-ui/core';
import { Button } from '@material-ui/core';
import image from '../images/image.jpg'
import profile from '../images/profile.jpg'
const useStyles = makeStyles(() => ({
    header: {
        width: '100%',
        height: '90vh',
        color: 'white'
    },
    headerChild: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: "translate(-50%, -50%)",
        textAlign: 'center',
    },
    Container: {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: "hidden",
        background: `linear-gradient(rgba(29, 38, 113, 0.8), rgba(195, 55, 100, 0.8)), url(${image})`,   /* The least supported option. */
    },
    Typography: {
        marginBottom: '20px',
        fontFamily: 'Otomanopee One, sans-serif',

    },
    button: {
        fontFamily: 'Otomanopee One, sans-serif',
        // fontFamily: 'Qahiri, sans-serif',

    }
}))


export default function HeaderSection() {

    const classes = useStyles()

    return (
        <>
            <Box className={classes.Container}>
                <Box className={classes.header}>

                    <div className={classes.headerChild}>
                        <img src={profile} style={{width:'200px', borderRadius:'50%', border:'4px solid black'}} alt="" />
                        <Typography variant="h4" className={classes.Typography}>
                            Muahmmad Zubair
                        </Typography>
                        <Typography variant="h5" className={classes.Typography}>
                            Wellcome Here
                        </Typography>
                        <Button className={classes.button} variant="contained" href="#contained-buttons">
                            See All project
                        </Button>
                    </div>
                </Box>
            </Box>
        </>
    )
}