import React from 'react';
import './App.css';
import styles from './App.module.css'
import CoronaImage from './images/image.png'
import Tabular from './table/tabular';
import { fetchSummary } from './api/fetchApi'
import Summary from './summary/summary';

class App extends React.Component {

  state = {
    data: {}
  }

  year = () => {
    var d = new Date();
    var n = d.getFullYear();
    return n
  }

  // retrieving data for sending data to summary.jsx
  async componentDidMount() {
    const fetchedData = await fetchSummary()
    this.setState({ data: fetchedData })
    console.log(fetchedData)
  }

  render() {
    const { data } = this.state; // passing data to Summary.jsx
    return (
      <>
        <div className={styles.container}>
          <img className={styles.image} src={CoronaImage} alt='Corona' />
        </div>
        <h4 style={{ textAlign: 'center' }} className="display-6"> INDIA CASES</h4>
        <Summary data={data} />
        <div className="container">
          <br></br>
          <Tabular />
        </div>
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://www.linkedin.com/in/khaidemsandip/"> Kurosaki</a>
        </div>

      </>
    );
  }
}

export default App;
