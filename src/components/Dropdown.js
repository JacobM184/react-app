import React, {useState, useEffect} from "react";
import "../styles/Dropdown.css"
import CaseDisp from "./CaseDisp";

const categories = ["Auckland", "Bay of Plenty", "Canterbury", "Capital and Coast", "Counties Manukau", "Hawke's Bay", "Hutt Valley",
                    "Lakes", "Managed Isolation & Quarantine", "Mid Central", "Nelson Marlborough", "Northland", "South Canterbury",
                    "Southern", "Tairāwhiti", "Taranaki", "Waikato", "Wairarapa", "Waitematā", "West Coast", "Whanganui"];

const Dropdown = (props) => {

    const [dhbSelection, setDhbSelection] = useState("Choose a DHB...")

    const handleSelectionChange = (e) =>{
        let option = e.target.value
        
        setDhbSelection(option)
        
    }

    const dataBase = props.dataBase.filter((data) => {
        return data.Geo == dhbSelection;
    })
    // console.log(dhbSelection)
    // console.log(dataBase)

    const showOption = dhbSelection === "Choose a DHB...";
    const showData = dataBase.length > 0;

    return(
        <div>
            <select value={dhbSelection} onChange={handleSelectionChange}>
                {showOption && <option key="None" value="Choose a DHB...">Choose a DHB...</option>}
                {categories.map((dhb) => {
                    return <option key={dhb} value={dhb}>{dhb}</option>
                })}
            </select>
            
            {showData ? <CaseDisp active={dataBase[0].Value} death={dataBase[1].Value} recovered={dataBase[2].Value} /> : ""}
      </div>
    )
}
// data={dataBase} active={dataBase[0].Value} death={dataBase[1].Value} recovered={dataBase[2].Value}

export default Dropdown