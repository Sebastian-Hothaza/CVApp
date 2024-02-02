import { useState } from "react";

function ExpInfo({experienceInfo, setExperienceInfo}){
    const [expanded, setExpanded] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setExperienceInfo({
            company:   e.target.company.value,
            duties:    e.target.duties.value,
            startD: e.target.startD.value,
            endD: e.target.endD.value
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
                <label htmlFor="duties">Duties</label>
                <input defaultValue={experienceInfo.duties} type="text" name="duties" id="duties" />

                <label htmlFor="startD">Start Date</label>
                <input defaultValue={experienceInfo.startD} type="date" name="startD" id="startD"/>
                <label htmlFor="endD">End Date</label>
                <input defaultValue={experienceInfo.endD} type="date" name="endD" id="endD"/>
                <button type="submit">Save</button>
            </form>
        }        
        </div>
    )
}

export default ExpInfo