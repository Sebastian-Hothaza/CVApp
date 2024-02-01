import { useState } from "react"

function PerInfo({personInfo, setPersonInfo}){
    const [expanded, setExpanded] = useState(false);
    


    const handleSubmit = (e) => {
        e.preventDefault();
        setPersonInfo({
            name: e.target.personName.value,
            email:  e.target.personEmail.value
        });
        
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
                <input defaultValue={personInfo.name} type="text" name="personName" id="personName" />
                <input defaultValue={personInfo.email} type="text" name="personEmail" id="personEmail"  />
                <button type="submit">Submit</button>
            </form>
        }        
        </div>
    )
}

export default PerInfo