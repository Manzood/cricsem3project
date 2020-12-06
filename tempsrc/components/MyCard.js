import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { getMatchDetail } from "../api/Api";
const MyCard=({match})=>{
    const [detail,setDetail]=useState({});
    const [open,setOpen]=useState(false);
    const handleClick = (id) => {
        getMatchDetail(id)
            .then((data) => { 
                console.log("matchdata",data)
                setDetail(data);
                handleOpen();
            })
            .catch((error)=> console.log(error));
    };
    const handleClose=()=>{
        setOpen(false)
    };
    const handleOpen=()=>{
        setOpen(true)
    };
    const getDialog=()=>{
        <Dialog open={open} onclose={handleClose}>
            <DialogTitle id="alert-dialog-title">{"Match Detail .."}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography>
                        {detail.stat}
                    </Typography>
                    <Typography>
                        Match 
                        <span style={{fontStyle:"italic",fontWeight:"bold"}}>
                            {detail.matchStarted?"Started":"Still not started"}
                        </span>
                    </Typography>
                    <Typography>
                        Score 
                        <span style={{fontStyle:"italic",fontWeight:"bold"}}>
                            {detail.score}
                        </span>
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autofocus>
                    Close
                </Button>
            </DialogActions>

        </Dialog>
    };
    

    const getCard=()=>{
        return (
            <Card style={{margin : 30}}> 
                <CardContent>
                    <Grid container justify="center" alignItems="center" spacing={4}>
                        <Grid item>
                            <Typography variant="h5">{match["team-1"]}</Typography>
                        </Grid>
                    <CardActions>
                        <Grid container justify="center">
                            <Button variant="text" color="secondary">
                             V/S
                            </Button>
                        </Grid>
                    </CardActions>
                        <Grid item>
                            <Typography variant="h5">{match["team-2"]}</Typography>
                        </Grid>

                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center">
                      <Button
                       onClick={()=>{
                          handleClick(match.unique_id);
                      }}
                      variant="contained" color="secondary">
                         Show Details 
                      </Button>
                     <Button style={{margin : 7}} variant="contained" color="secondary">
                         Start Time {new Date (match.dateTimeGMT).toLocaleString() }
                        </Button>
                    </Grid>
                </CardActions>
            </Card>

        );
    };
    return(
    <Fragment>
        {getCard()}
        {getDialog()}

    </Fragment>
    );
    
};
export default MyCard;