import { useState } from "react"

function PerInfo({personInfo, setPersonInfo}){
    const [expanded, setExpanded] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setPersonInfo({
            name:   e.target.personName.value,
            email:  e.target.personEmail.value,
            phone:  e.target.personPhone.value
        });
        setExpanded(false);
    }


    return(
        <div className="infoBox">
            <div className="infoBoxHeader">
                Personal Info
                <button className="expandBtn" onClick={() => expanded? setExpanded(false) : setExpanded(true)}>V</button>
            </div>
        
        { expanded &&
            <form className="infoBoxForm" onSubmit={handleSubmit}>
                <label htmlFor="personName">Name</label>
                <input defaultValue={personInfo.name} type="text" name="personName" id="personName" />
                <label htmlFor="personEmail">Email</label>
                <input defaultValue={personInfo.email} type="text" name="personEmail" id="personEmail"  />
                <label htmlFor="personPhone">Phone</label>
                <input defaultValue={personInfo.phone} type="text" name="personPhone" id="personPhone"  />
                <button type="submit">Save</button>
            </form>
        }        
        </div>
    )
}

export default PerInfo