import React from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({

    SocialLinkBox:{
        height:"200px"
    },
    Typography:{
        position: 'relative',
        top:"50%"
    }



}))
export default function SocialLink() {
    const classes = useStyles()
    return (
        <>
            <Container>
                <Grid container>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Box className={classes.SocialLinkBox}>
                            <Typography className={classes.Typography} component="h2" variant="subtitled">
                                Hello world
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Box className={classes.SocialLinkBox}>
                            <Typography className={classes.Typography} component="h2" variant="subtitled">
                                Hello world
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Box className={classes.SocialLinkBox}>
                            <Typography className={classes.Typography} component="h2" variant="subtitled">
                                Hello world
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Box className={classes.SocialLinkBox}>
                            <Typography className={classes.Typography} component="h2" variant="subtitled">
                                Hello world
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}