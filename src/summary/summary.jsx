import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import cx from "classnames";
import styles from "./Summary.module.css";
import CountUp from "react-countup";
import { fetchStateWise } from "../api/fetchApi";

const Summary = () => {
  // if (!confirmed) {
  //   return "Loading...";
  //   //   console.log(total);
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
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          {/* Card content detailing all the data from the url */}
          <CardContent>
            <Typography
              color="textSecondary"
              style={{ fontSize: "18px", textAlign: "center" }}
              gutterBottom
            >
              Total Confirmed in India
            </Typography>
            <Typography variant="h5" style={{ textAlign: "center" }}>
              {fetchedState.slice(0, 1).map((e, i) => (
                <CountUp
                  key={i}
                  start={0}
                  end={parseInt(e.confirmed)}
                  duration={2.5}
                  separator=","
                />
              ))}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          {/* Card content detailing all the data from the url */}
          <CardContent>
            <Typography
              color="textSecondary"
              style={{ fontSize: "18px", textAlign: "center" }}
              gutterBottom
            >
              Total Recovered in India
            </Typography>
            <Typography variant="h5" style={{ textAlign: "center" }}>
              {fetchedState.slice(0, 1).map((e, i) => (
                <CountUp
                  key={i}
                  start={0}
                  end={parseInt(e.recovered)}
                  duration={2.5}
                  separator=","
                />
              ))}
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          {/* Card content detailing all the data from the url */}
          <CardContent>
            <Typography
              color="textSecondary"
              style={{ fontSize: "18px", textAlign: "center" }}
              gutterBottom
            >
              Total Deaths in India
            </Typography>
            <Typography variant="h5" style={{ textAlign: "center" }}>
              {fetchedState.slice(0, 1).map((e, i) => (
                <CountUp
                  key={i}
                  start={0}
                  end={parseInt(e.deaths)}
                  duration={2.5}
                  separator=","
                />
              ))}
            </Typography>
            {/* <Typography variant="body2">deaths</Typography> */}
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Summary;
