import React, { useState, useEffect } from "react";
import { fetchData } from "../api/fetchApi";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from "../table/table.css";

const Tabular = () => {

    const [fetchedState, setFetchedState] = useState([])

    useEffect(() => {
        const fetchAPIState = async () => {
            const dailyData = await fetchData()
            setFetchedState(dailyData)
            console.log(dailyData)
        }
        fetchAPIState()
    }, [])

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={styles.container} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="alert alert-secondary">State</TableCell>
                            <TableCell className="alert alert-warning" align="center">Confirmed</TableCell>
                            <TableCell className="alert alert-success" align="center">Discharged</TableCell>
                            <TableCell className="alert alert-danger" align="center">Deaths</TableCell>
                            <TableCell className="alert alert-primary" align="center">Confirmed Indian</TableCell>
                            <TableCell className="alert alert-info" align="center">Confirmed Foreign</TableCell>
                        </TableRow>
                    </TableHead>
                    {/* Tabular data displaying data from all states of India */}
                    <TableBody>
                        {fetchedState.map((e, i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">
                                    {e.loc}
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="center">{e.totalConfirmed}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="center">{e.discharged}</TableCell>
                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="center">{e.deaths}</TableCell>
                                <TableCell style={{ background: 'rgba(187, 223, 255, 0.5)' }} align="center">{e.confirmedCasesIndian}</TableCell>
                                <TableCell style={{ background: 'rgba(192, 233, 239, 0.5)' }} align="center">{e.confirmedCasesForeign}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )

}

export default Tabular


