import React, { useState } from "react";
import "../styles/CaseDisp.css"

const CaseDisp = (props) =>{
    const [currentActive, setCurrentActive] = useState(0)
    const [currentDeaths, setCurrentDeaths] = useState(0)
    const [currentRecovered, setCurrentRecovered] = useState(0)
    // console.log(props.data)
    const showData = props.data.length > 0;

    const handleClick = () => {
        setCurrentActive(props.data[0].Value)
        setCurrentDeaths(props.data[1].Value)
        setCurrentRecovered(props.data[2].Value)
        // console.log(currentDhbData.Value)
    }

    return (<div>
        <button className="caseBtn" onClick={handleClick}>Load Data</button>
        <p className="active">Active cases: {currentActive}</p>
        <p className="deaths">Deaths cases: {currentDeaths}</p>
        <p className="recovered">Recovered cases: {currentRecovered}</p>
    </div>)
}

export default CaseDisp