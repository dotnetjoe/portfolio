import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { TextareaAutosize, TextField, Button } from '@material-ui/core';
export default function Contact() {
    return (
        <>
            <Box style={{ background: '#191919' }}>
                <Grid container >
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Typography>
                            <form action="" style={{ padding: "10%" }}>
                                <Grid style={{ margin: "20px", display: 'flex', justifyContent: 'space-between' }} >
                                    <TextField InputLabelProps={{
                                        style: { color: '#fff' },
                                    }} label="First Name" fullWidth variant="outlined" />
                                    <TextField InputLabelProps={{
                                        style: { color: '#fff' },
                                    }} label="Last Name" fullWidth variant="outlined" />

                                </Grid>
                                <Grid style={{ margin: "20px" }}>

                                    <TextField InputLabelProps={{
                                        style: { color: '#fff' },
                                    }} label="Email" fullWidth variant="outlined" color="secondry" />
                                </Grid>
                                <Grid style={{ margin: "20px" }}>
                                    <TextareaAutosize
                                        style={{padding: '20px', width:'100%' }}
                                        maxRows={15}
                                        minRows={15}
                                        aria-label="maximum height"
                                        placeholder="Type Your message...."
                                        fullWidth
                                        variant="outline"
                                    />
                                </Grid>
                                <Grid style={{ margin: "20px" }}>
                                    <Button variant="contained" color="primary">Submite</Button>
                                </Grid>

                            </form>

                        </Typography>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <div className="mapouter"><div className="gmap_canvas">
                            <iframe
                                title="This is my home address"
                                className="gmap_iframe"
                                frameBorder={0}
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=nishter basti&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                            />
                            <a href="https://www.fridaynightfunkin.net/friday-night-funkin-mods-fnf-play-online/">
                                Friday Night Funkin Mods
                            </a>
                        </div>
                            <style dangerouslySetInnerHTML={{ __html: ".mapouter{position:relative;text-align:right;width:100%;height:600px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:80%;margin:10% auto;padding:30px;  }.gmap_iframe {width:100%!important;height:600px!important;}" }} />
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}