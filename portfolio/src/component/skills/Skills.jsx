import { Typography } from '@material-ui/core';
import React from 'react';
import { Container, Grid, makeStyles, Box } from '@material-ui/core';

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
        height: 'auto',
        paddingBottom: '70px',
        color: 'white',
        overflow: "hidden",
        backgroundColor: '#191919'
        // background: `url(${image})`
        // background: `linear-gradient(rgba(5, 5, 5, 0.9), rgba(5, 5, 5, 0.9)), url(${image})`,   /* The least supported option. */
    },
    font: {
        fontSize: '0.5',
        color: '#767676'

    },
    skillTextAlignment: {
        textAlign: 'center',
        padding: '18px',
        justifyContent: 'center'
    },
    fontIcon: {
        fontSize: '70px',
        marginBottom: '20px',
        // backgroundColor:'linear-gradient(rgba(5, 5, 5, 0.9), rgba(5, 5, 5, 0.9)))'
        // color:'linear-gradient(rgba(5, 5, 5, 0.9), rgba(5, 5, 5, 0.9)))'

    }

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
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                            <Box className={classes.skillTextAlignment}>
                                <i className={`fab fa-html5 ${classes.fontIcon}`}></i>

                                <Typography component="h4" variant="h4">
                                    HTML5
                                </Typography>
                                <Box>
                                    <Typography className={classes.font}>
                                        lfkdlkfsdajf dlj lkdfjdsf lksf ldskfjldsjf lkdsflsdflksdfladla sd
                                        fkf jlfdslkldsfsdkfj lfjlj lsdfl sfjladjflk jflf lkf ljfldf ljfldfj
                                        kfjl fjdfk lf
                                        f kdfjksd jsdl asldfklsk lfkdlkfsdajfasf fk k lds dskljdsl jsd fjsdlf

                                    </Typography>
                                </Box>

                            </Box>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                            <Box className={classes.skillTextAlignment}>
                                <i class="fab fa-css3-alt"></i>
                                <Typography component="h4" variant="h4">
                                    CSS3
                                </Typography>
                                <Box>
                                    <Typography className={classes.font}>
                                        lfkdlkfsdajf dlj lkdfjdsf lksf ldskfjldsjf lkdsflsdflksdfladla sd
                                        fkf jlfdslkldsfsdkfj lfjlj lsdfl sfjladjflk jflf lkf ljfldf ljfldfj
                                        kfjl fjdfk lf
                                        f kdfjksd jsdl asldfklsk lfkdlkfsdajfasf fk k lds dskljdsl jsd fjsdlf

                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                            <Box className={classes.skillTextAlignment}>
                                <i class="fab fa-js"></i>
                                <Typography component="h4" variant="h4">
                                    JavaScript
                                </Typography>
                                <Box>
                                    <Typography className={classes.font}>
                                        lfkdlkfsdajf dlj lkdfjdsf lksf ldskfjldsjf lkdsflsdflksdfladla sd
                                        fkf jlfdslkldsfsdkfj lfjlj lsdfl sfjladjflk jflf lkf ljfldf ljfldfj
                                        kfjl fjdfk lf
                                        f kdfjksd jsdl asldfklsk lfkdlkfsdajfasf fk k lds dskljdsl jsd fjsdlf

                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                            <Box className={classes.skillTextAlignment}>
                                <i class="fab fa-react"></i>
                                <Typography component="h4" variant="h4">
                                    React.Js
                                </Typography>
                                <Box>
                                    <Typography className={classes.font}>
                                        We used latest react vertion ^17.14.2 Its a awesome design made by react.

                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                            <Box className={classes.skillTextAlignment}>
                                <i class="fab fa-node"></i>
                                <Typography component="h4" variant="h4">
                                    Node.Js
                                </Typography>
                                <Box>
                                    <Typography className={classes.font}>
                                        lfkdlkfsdajf dlj lkdfjdsf lksf ldskfjldsjf lkdsflsdflksdfladla sd
                                        fkf jlfdslkldsfsdkfj lfjlj lsdfl sfjladjflk jflf lkf ljfldf ljfldfj
                                        kfjl fjdfk lf
                                        f kdfjksd jsdl asldfklsk lfkdlkfsdajfasf fk k lds dskljdsl jsd fjsdlf

                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                            <Box className={classes.skillTextAlignment}>
                                <Typography component="h4" variant="h4">
                                    Express.JS
                                </Typography>
                                <Box>
                                    <Typography className={classes.font}>
                                        lfkdlkfsdajf dlj lkdfjdsf lksf ldskfjldsjf lkdsflsdflksdfladla sd
                                        fkf jlfdslkldsfsdkfj lfjlj lsdfl sfjladjflk jflf lkf ljfldf ljfldfj
                                        kfjl fjdfk lf
                                        f kdfjksd jsdl asldfklsk lfkdlkfsdajfasf fk k lds dskljdsl jsd fjsdlf

                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                            <Box className={classes.skillTextAlignment}>
                                <i class="fab fa-mdb"></i>
                                <Typography component="h4" variant="h4">
                                    MongoDB
                                </Typography>
                                <Box>
                                    <Typography className={classes.font}>
                                        lfkdlkfsdajf dlj lkdfjdsf lksf ldskfjldsjf lkdsflsdflksdfladla sd
                                        fkf jlfdslkldsfsdkfj lfjlj lsdfl sfjladjflk jflf lkf ljfldf ljfldfj
                                        kfjl fjdfk lf
                                        f kdfjksd jsdl asldfklsk lfkdlkfsdajfasf fk k lds dskljdsl jsd fjsdlf

                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                            <Box className={classes.skillTextAlignment}>
                                <Typography component="h4" variant="h4">
                                    Material-UI
                                </Typography>
                                <Box>
                                    <Typography className={classes.font}>
                                        lfkdlkfsdajf dlj lkdfjdsf lksf ldskfjldsjf lkdsflsdflksdfladla sd
                                        fkf jlfdslkldsfsdkfj lfjlj lsdfl sfjladjflk jflf lkf ljfldf ljfldfj
                                        kfjl fjdfk lf
                                        f kdfjksd jsdl asldfklsk lfkdlkfsdajfasf fk k lds dskljdsl jsd fjsdlf

                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                            <Box className={classes.skillTextAlignment}>
                                <i class="fab fa-bootstrap"></i>
                                <Typography component="h4" variant="h4">
                                    BootStrap
                                </Typography>
                                <Box>
                                    <Typography className={classes.font}>
                                        lfkdlkfsdajf dlj lkdfjdsf lksf ldskfjldsjf lkdsflsdflksdfladla sd
                                        fkf jlfdslkldsfsdkfj lfjlj lsdfl sfjladjflk jflf lkf ljfldf ljfldfj
                                        kfjl fjdfk lf
                                        f kdfjksd jsdl asldfklsk lfkdlkfsdajfasf fk k lds dskljdsl jsd fjsdlf
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
                            <Box className={classes.skillTextAlignment}>
                                <i class="fab fa-bootstrap"></i>
                                <Typography component="h4" variant="h4">
                                    React-Bootstrap
                                </Typography>
                                <Box>
                                    <Typography className={classes.font}>
                                        lfkdlkfsdajf dlj lkdfjdsf lksf ldskfjldsjf lkdsflsdflksdfladla sd
                                        fkf jlfdslkldsfsdkfj lfjlj lsdfl sfjladjflk jflf lkf ljfldf ljfldfj
                                        kfjl fjdfk lf
                                        f kdfjksd jsdl asldfklsk lfkdlkfsdajfasf fk k lds dskljdsl jsd fjsdlf
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
