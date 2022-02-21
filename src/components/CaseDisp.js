import React, { useEffect, useState } from "react";
import "../styles/CaseDisp.css"

const CaseDisp = (props) =>{
    // const [status, setStatus] = useState({
    //     currentActive: props.data[0].Value,
    //     currentDeaths: props.data[1].Value,
    //     currentRecovered: props.data[2].Value,
    // })
    // console.log(props.data)
    
    // useEffect(()=>{
    //     setStatus({
    //         currentActive: props.data[0].Value,
    //         currentDeaths: props.data[1].Value,
    //         currentRecovered: props.data[2].Value,
    //     })
    // }, [])
    
    // const {currentActive, currentDeaths, currentRecovered} = status
    // console.log(currentActive, currentDeaths, currentRecovered)

    return (<div>
        {/* <button className="caseBtn" onClick={handleClick}>Load Data</button> */}
        {/* <p className="active">Active cases: {currentActive}</p> */}
        <p className="active">Active cases: {props.active}</p>
        {/* <p className="deaths">Deaths: {currentDeaths}</p> */}
        <p className="deaths">Deaths: {props.death}</p>
        {/* <p className="recovered">Recovered cases: {currentRecovered}</p> */}
        <p className="recovered">Recovered cases: {props.recovered}</p>
    </div>)
}

export default CaseDisp