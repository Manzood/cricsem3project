import logo from './logo.svg';
import './App.css';
import { AppBar, Button, Grid, Typography } from '@material-ui/core';
import Navbar from './components/Navbar';
import MyCard from './components/MyCard';
import {getMatches} from "./api/Api";
import {Fragment, useEffect, useState} from 'react';
import './mongodb/accessdb.js'

function App() { 
 const [matches, setMatches] = useState([]);
  useEffect(() => {
    getMatches()
    .then((data)=> setMatches(data.matches))
    .catch(error=>alert("can't load"));
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
             {match.type==="Twenty20"?(
                <MyCard key={match.unique_id} match ={match} />
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
