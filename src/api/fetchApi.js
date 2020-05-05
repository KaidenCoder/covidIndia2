const url = 'https://api.rootnet.in/covid19-in/stats/latest'
// const url = 'https://api.covid19india.org/state_district_wise.json'

// Query out the url data which is displayed in tabular.js
export const fetchData = async () => {
    try {
        const { data } = await (await fetch(url)).json();
        const modifiedData = [...data.regional].sort((a, b) => b.totalConfirmed - a.totalConfirmed)
        return modifiedData;

    } catch (error) {

    }
}

export const fetchDataRecovered = async () => {
    try {
        const { data } = await (await fetch(url)).json();
        const modifiedData = [...data.regional].sort((a, b) => b.discharged - a.discharged)
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

