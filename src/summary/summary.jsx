import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import cx from "classnames";
import styles from "./Summary.module.css";
import CountUp from "react-countup";

const Summary = ({ data: { total, discharged, deaths } }) => {
  if (!total) {
    return "Loading...";
    //   console.log(total);
  }
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
              Total Infected in India
            </Typography>
            <Typography variant="h5" style={{ textAlign: "center" }}>
              <CountUp start={0} end={total} duration={2.5} separator="," />
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
              <CountUp
                start={0}
                end={discharged}
                duration={2.5}
                separator=","
              />
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
              <CountUp start={0} end={deaths} duration={2.5} separator="," />
            </Typography>
            {/* <Typography variant="body2">deaths</Typography> */}
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Summary;
