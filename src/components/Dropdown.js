import React, {useState, useEffect} from "react";
import "../styles/Dropdown.css"
import CaseDisp from "./CaseDisp";

const categories = ["Auckland", "Bay of Plenty", "Canterbury", "Capital and Coast", "Counties Manukau", "Hawke's Bay", "Hutt Valley",
                    "Lakes", "Managed Isolation & Quarantine", "Mid Central", "Nelson Marlborough", "Northland", "South Canterbury",
                    "Southern", "Tairāwhiti", "Taranaki", "Waikato", "Wairarapa", "Waitematā", "West Coast", "Whanganui"];

const Dropdown = (props) => {

    const [dhbSelection, setDhbSelection] = useState("Choose a DHB...")
    const [dataBase, setDataBase] = useState([])

    const handleSelectionChange = async (e) =>{
        await setDhbSelection(e.target.value)
        updateData()
        console.log(dataBase)
    }

    const checkDHB = (dhb) => {
        return dhb.Geo === dhbSelection;
    }

    const showOption = dhbSelection === "Choose a DHB..." ? true : false;
    const showData = dataBase.length > 0;

    async function updateData(){
        let res = []
        res = await props.dataBase.filter(checkDHB)
        await setDataBase(res)
    }

    useEffect(() => {

        updateData()
        
    }, [])

    return(
        <div>
            <select value={dhbSelection} onChange={handleSelectionChange}>
                {showOption && <option key="None" value="Choose a DHB...">Choose a DHB...</option>}
                {categories.map((dhb) => {
                    return <option key={dhb} value={dhb}>{dhb}</option>
                })}
            </select>
            
            {showData ? <CaseDisp data={dataBase}/> : ""}
      </div>
    )
}

export default Dropdown