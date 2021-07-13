import React from 'react';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
// import {theme} from '../styles/theme'
import { useStyles } from '../styles/styles'
import Navbar from '../navbaar/Navbar';


export default function HeaderSection() {
    const classes = useStyles()
    // console.log(theme)
    return (
        <>
            <Box className={classes.HeaderWraper}>
                <Navbar />
                <Box>
                    <Typography variant="h2">
                        Hello developer
                    </Typography>
                </Box>
            </Box>
        </>
    )
}