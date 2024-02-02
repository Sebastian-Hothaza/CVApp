import { useState } from "react";

function ExpInfo({experienceInfo, setExperienceInfo}){
    const [expanded, setExpanded] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setExperienceInfo({
            company:   e.target.company.value,
        });
        setExpanded(false);
    }


    return(
        <div className="infoBox">
            <div className="infoBoxHeader">
                Experience Info
                <button className="expandBtn" onClick={() => expanded? setExpanded(false) : setExpanded(true)}>V</button>
            </div>
        
        { expanded &&
            <form className="infoBoxForm" onSubmit={handleSubmit}>
                <label htmlFor="company">Company</label>
                <input defaultValue={experienceInfo.company} type="text" name="company" id="company" />
                <button type="submit">Save</button>
            </form>
        }        
        </div>
    )
}

export default ExpInfo