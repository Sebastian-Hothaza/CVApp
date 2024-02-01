import { useState } from "react"

function PerInfo({personName, setPersonName}){
    const [expanded, setExpanded] = useState(false);
    


    const handleSubmit = (e) => {
        e.preventDefault();
        setPersonName(e.target.personName.value);
        setExpanded(false);
    }


    return(
        <div className="infoBox">
            <div className="infoBoxHeader">
                PersonalInfo
                <button onClick={() => expanded? setExpanded(false) : setExpanded(true)}>VVV</button>
            </div>
        
        { expanded &&
            <form className="infoBoxForm" onSubmit={handleSubmit}>
                <input type="text" name="personName" id="personName" />
                <button type="submit">Submit</button>
            </form>
        }        
        </div>
    )
}

export default PerInfo