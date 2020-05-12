import React, { useState, useEffect } from "react";
import './App.css';
import styles from './App.module.css'
import CoronaImage from './images/image.png'
import Tabular from './table/tabular';
import { fetchSummary, fetchStateWise } from './api/fetchApi'
import Summary from './summary/summary';
import Charts from './Chart/Chart';

const App = () => {

  // state = {
  //   data: {}
  // }

  // // year = () => {
  // //   var d = new Date();
  // //   var n = d.getFullYear();
  // //   return n
  // // }

  // // retrieving data for sending data to summary.jsx
  // async componentDidMount() {
  //   const fetchedData = await fetchSummary()
  //   this.setState({ data: fetchedData })
  //   console.log(fetchedData)
  // }

  const [fetchedState, setFetchedState] = useState([]);

  useEffect(() => {
    const fetchAPIState = async (clicked) => {
      const stateData = await fetchStateWise();
      setFetchedState(stateData);
      //console.log(dailyData)
    };

    fetchAPIState();
  }, []);


  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} src={CoronaImage} alt='Corona' />
      </div>
      <h4 style={{ textAlign: 'center' }} className="display-6"> INDIA CASES</h4>
      {/* <h6 style={{ textAlign: 'center' }} > <button type="button" className="btn btn-light"><a href="https://covid19worldstats.netlify.app/">Check World cases/</a></button><a href="https://neindiacovid19.netlify.app/">Ne-India</a></h6> */}
      <p className="container" style={{ textAlign: 'center', fontSize: '14px', paddingTop: 10 }} className="card-subtitle mb-2 text-muted">  <a href="https://covid19worldstats.netlify.app/" style={{ paddingRight: 20 }}>World</a>      <a href="https://neindiacovid19.netlify.app/" style={{ paddingLeft: 20 }}>Ne-India</a></p>
      {/* <p style={{ textAlign: 'center', fontSize: '14px' }} className="card-subtitle mb-2 text-muted">Check Ne-India cases<a href="https://neindiacovid19.netlify.app/"> (Link)</a></p> */}

      <div style={{ background: 'rgba(192,192,192,0.1)', marginTop: 20 }} className="alert container" role="alert">
        <h5 style={{ color: 'rgba(0,0,0,0.4)', fontFamily: 'Helvetica Narrow', fontWeight: 100 }}>India Time Series Graph</h5>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Charts />
      </div>
      <Summary />
      <div className="alert container" style={{ background: 'rgba(192,192,192,0.11)' }} role="alert">
        <h5 style={{ color: 'rgba(0,0,0,0.4)', fontFamily: 'Helvetica Narrow' }}>States Data Table</h5>
      </div>
      <div className="container" >
        <br></br>
        <Tabular />
      </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
    <a href="https://www.linkedin.com/in/khaidemsandip/"> Kurosaki. </a>
       Powered by <a href="https://www.postman.com/">POSTMAN </a>
      </div>

    </>
  );

}

export default App;

