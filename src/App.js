// import logo from './logo.svg';
import './App.css';
import { AppBar, Button, Grid, Typography } from '@material-ui/core';
import Navbar from './components/Navbar';
import MyCard from './components/MyCard';
import {getMatches} from "./api/Api";
import {Fragment, useEffect, useState} from 'react';
// import {transfermatchesintofile} from './mongodb/db'
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
// var exportval;

function App() { 
 const [matches, setMatches] = useState([]);
  useEffect(() => {
    getMatches()
    .then((data)=> {
      setMatches(data.matches)
// these are the changed I've made... Everything works well, so far
      // so maybe over here?
      // transfermatchesintofile(data.matches);
      console.log("This is the data \n", typeof(data), "\n", data);
      // exportval = data.matches;
      // export {exportval};
    })
    .catch(error=> alert("Unable to load"));
  },[]);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Typography variant="h3" color="primary" style={{marginTop:20}}>
        LIVE CRICKET SCORE
      </Typography>
      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">
         {matches.map((match) =>(
           <Fragment>
             {match.type === "Twenty20"?(
                <MyCard key={match.unique_id} match ={match} />
                // should probably call the function to store details about the match over here
             ) : (
               ""
             )}
           </Fragment>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
