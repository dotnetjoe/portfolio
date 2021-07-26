import { Typography } from '@material-ui/core';
import React,{useEffect} from 'react';
import { Container, Grid, makeStyles, Box } from '@material-ui/core';
import HTML from '../images/html.png'
import CSS from '../images/css.png'
import JS from '../images/js.png'
import ReactJS from '../images/react.png'
import nodeJS from '../images/node_js.png'
import expressJs from '../images/express.png'
import mongoDB from '../images/mongodb.png'
import materialUI from '../images/material-ui.png'
import bootstrap from '../images/bootstrap.png'
import reactBootstrap from '../images/react-bootstrap.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

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

    },
    skillImage: {
        width: "25%"
    }

}))

export default function Skills() {
    const classes = useStyles()
    console.log(classes)
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <>
            <Box className={classes.Container} id="Skills">

                <Container>
                    <Grid container spacing={3} >
                        <Grid item xs={12}>
                            <Typography className={classes.SkillsHeading} component="h2" variant="h3">
                                Skill Experties
                            </Typography>
                        </Grid>

                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="2000">
                            <Box className={classes.skillTextAlignment}>
                                <Box>
                                    <img className={classes.skillImage} src={HTML} alt="" />
                                </Box>

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
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="2000">
                            <Box className={classes.skillTextAlignment}>
                                <Box>
                                    <img className={classes.skillImage} src={CSS} alt="" />
                                </Box>
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
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="2000">
                            <Box className={classes.skillTextAlignment}>
                                <Box>
                                    <img className={classes.skillImage} src={JS} alt="" />
                                </Box>
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
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="2000">
                            <Box className={classes.skillTextAlignment}>
                                <Box>
                                    <img className={classes.skillImage} src={ReactJS} alt="" />
                                </Box>
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
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="2000">
                            <Box className={classes.skillTextAlignment}>
                                <Box>
                                    <img style={{ margin: '10px 0px' }} className={classes.skillImage} src={nodeJS} alt="" />
                                </Box>
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
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="2000">
                            <Box className={classes.skillTextAlignment}>
                                <Box>
                                    <img style={{ marginBottom: '15px', width: "250px" }} className={classes.skillImage} src={expressJs} alt="" />
                                </Box>
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
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="2000">
                            <Box className={classes.skillTextAlignment}>
                                <Box>
                                    <img className={classes.skillImage} src={mongoDB} alt="" />
                                </Box>
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
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="2000">
                            <Box className={classes.skillTextAlignment}>
                                <Box>
                                    <img className={classes.skillImage} src={materialUI} alt="" />
                                </Box>
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
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="2000">
                            <Box className={classes.skillTextAlignment}>
                                <Box>
                                    <img className={classes.skillImage} src={bootstrap} alt="" />
                                </Box>
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
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="2000">
                            <Box className={classes.skillTextAlignment}>
                                <Box>
                                    <img className={classes.skillImage} src={reactBootstrap} alt="" />
                                </Box>
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
