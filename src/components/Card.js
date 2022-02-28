import React, {useEffect, useState} from "react";
import "../styles/Card.css"
import Dropdown from "./Dropdown";

const Card = () => {
    const urlDHB = 'https://api.stats.govt.nz/opendata/v1/Covid-19Indicators/Observations?$filter=ResourceID%20eq%20\'CPCOV4\'&$select=Geo,Label1,Value&$orderby=Geo,Label1'
    const urlCumulative = 'https://api.stats.govt.nz/opendata/v1/Covid-19Indicators/Observations?$filter=ResourceID%20eq%20\'CPCOV2\'&$select=Period,Label1,Value&$orderby=Period,Label1'
    const method = 'GET'
    const headers = {
        'Cache-Control': 'no-cache',
        'Ocp-Apim-Subscription-Key': '3bc745ea1d1245f8a40d8563a0f36432',}

    const [data, setData] = useState({
        parentData: {},
        cumulative: {},
    })
    
    useEffect(() =>{

        async function fetchMyAPI(){
            let response = await fetch(urlDHB, {method: method, headers: headers})
            let cumulative = await fetch(urlCumulative, {method: method, headers: headers})
            response = await response.json()
            cumulative = await cumulative.json()
            setData({
                parentData: response.value,
                cumulative: cumulative.value,
            })
        }
        
        fetchMyAPI();

    }, [])

    const {parentData, cumulative} = data
    const hasData = parentData.length > 0;

    // get latest active case data
    const currActive = cumulative[cumulative.length-3]

    // get new deaths since previous entry
    const newDeaths = hasData ? cumulative[cumulative.length-2].Value - cumulative[cumulative.length-5].Value : 0
 
    // get new recoveries since previous entry
    const newRecovery = hasData ? cumulative[cumulative.length-1].Value - cumulative[cumulative.length-4].Value : 0

    // get previous active cases minus the new deaths and recoveries
    const prevActive = hasData ? cumulative[cumulative.length-6].Value - newDeaths - newRecovery: 0

    const prevDate = hasData ? cumulative[cumulative.length-6].Period: "NoDate"


    return (<div className="container">
        <h1 className="header">COVID-19 Dashboard</h1>
        {hasData ? <><h4 className="new-case-title">New {currActive.Label1} Cases (since {prevDate}):</h4> 
        <h4 className="new-cases">{currActive.Value - prevActive}</h4></> : ""}
        {hasData ? <><h4 className="dropdown-title">Total cases by District Health Board:</h4><Dropdown dataBase={parentData}/></> : <p className="loadingAnim">Loading...</p>}
    </div>);
}

export default Card