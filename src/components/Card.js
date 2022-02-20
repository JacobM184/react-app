import React, {useEffect, useState} from "react";
import "../styles/Card.css"
import Dropdown from "./Dropdown";

const Card = () => {
    const url = 'https://api.stats.govt.nz/opendata/v1/Covid-19Indicators/Observations?$filter=ResourceID%20eq%20\'CPCOV4\'&$select=Geo,Label1,Value&$orderby=Geo,Label1'
    const method = 'GET'
    const headers = {
        'Cache-Control': 'no-cache',
        'Ocp-Apim-Subscription-Key': '3bc745ea1d1245f8a40d8563a0f36432',}

    const [parentData, setParentData] = useState([])

    useEffect(() =>{

        async function fetchMyAPI(){
            let response = await fetch(url, {method: method, headers: headers})
            response = await response.json()
            setParentData(response.value)
        }
        
        fetchMyAPI();

    }, [])


    const hasData = parentData.length > 0;
    // console.log(parentData)

    return (<div className="container">
        <h1 className="header">Today's COVID Cases:</h1>
        {hasData ? <Dropdown dataBase={parentData}/> : <p className="loadingAnim">Loading...</p>}
    </div>);
}

export default Card