const url = 'https://api.rootnet.in/covid19-in/stats/latest'
// const url = 'https://api.covid19india.org/state_district_wise.json'
const timeUrl = 'https://api.covid19india.org/data.json'

// Fetch Time series line graph
export const fetchTimeData = async () => {
    try {
        const { cases_time_series } = await (await fetch(timeUrl)).json();
        const modifiedData = cases_time_series.map((timeData) => ({
            confirmed: timeData.totalconfirmed,
            deaths: timeData.totaldeceased,
            recovered: timeData.totalrecovered,
            active: timeData.totalconfirmed - timeData.totaldeceased - timeData.totalrecovered,
            date: timeData.date
        }))
        return modifiedData
    } catch (error) {

    }
}

// Fetch State wise details
export const fetchStateWise = async () => {
    try {
        const { statewise } = await (await fetch(timeUrl)).json();
        const modifiedData = statewise.map((stateData) => ({
            active: stateData.active,
            confirmed: stateData.confirmed,
            deaths: stateData.deaths,
            recovered: stateData.recovered,
            state: stateData.state,
            lastupdate: stateData.lastupdatedtime
        }))
        return modifiedData
    } catch (error) {

    }
}

// Fetch Total India data
export const fetchTotalStateWise = async () => {
    try {
        const { statewise } = await (await fetch(timeUrl)).json();
        const modifiedData = statewise.map((stateData) => ({
            active: stateData.active,
            confirmed: stateData.confirmed,
            deaths: stateData.deaths,
            recovered: stateData.recovered,
            state: stateData.state,
            lastupdate: stateData.lastupdatedtime
        }))
        return modifiedData
    } catch (error) {

    }
}

// Query out the url data which is displayed in tabular.js
export const fetchData = async () => {
    try {
        const { data } = await (await fetch(url)).json();
        const modifiedData = [...data.regional].sort((a, b) => b.totalConfirmed - a.totalConfirmed)
        return modifiedData;

    } catch (error) {

    }
}

// Query out the url data which is displayed in summary.jsx
export const fetchSummary = async () => {

    try {
        const { data } = await (await fetch(url)).json();
        const modifiedData = {
            total: data.summary.total,
            discharged: data.summary.discharged,
            deaths: data.summary.deaths
        }
        return modifiedData;
    } catch (error) {

    }
}


















export const fetchDataRecovered = async () => {
    try {
        const { data } = await (await fetch(url)).json();
        const modifiedData = [...data.regional]
        // const modifiedData = [...data.regional].sort((a, b) => b.discharged - a.discharged)
        return modifiedData;

    } catch (error) {

    }
}

export const fetchDataDeaths = async () => {
    try {
        const { data } = await (await fetch(url)).json();
        const modifiedData = [...data.regional].sort((a, b) => b.deaths - a.deaths)
        return modifiedData;

    } catch (error) {

    }
}




