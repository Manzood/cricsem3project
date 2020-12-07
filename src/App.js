// import logo from './logo.svg';
import './App.css';
import { AppBar, Button, Grid, Typography } from '@material-ui/core';
import Navbar from './components/Navbar';
import MyCard from './components/MyCard';
import {getMatches} from "./api/Api";
import {Fragment, useEffect, useState} from 'react';

function updateData(postData){
  fetch ('http://localhost:5000', {method: 'POST', body: postData, mode: 'no-cors'})
  .then((res) => {
    console.log(res);
  })
  .catch(err => console.log(err));
}

var matchdata;

function getData (request) {
  fetch ('http://localhost:5000', {method: 'GET', mode: 'no-cors'})
  .then((res) => {
    console.log(res)
    matchdata = res;
  })
  .catch(err => console.log(err));
}

function App() { 
 const [matches, setMatches] = useState([]);
  useEffect(() => {
    getMatches()
    .then((data)=> {
      setMatches(data.matches)
      console.log("This is the data \n", typeof(data), "\n", data);
      updateData(data.matches);
      getData(data.matches);
    })
    .catch(error=> {
      console.log("The error is: ", error);
      alert("Unable to load")
    });
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
