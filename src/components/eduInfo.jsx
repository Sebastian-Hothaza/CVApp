import { useState } from "react"

function EduInfo({educationInfo, setEducationInfo}){
    const [expanded, setExpanded] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setEducationInfo({
            school:   e.target.school.value,
            degree:  e.target.degree.value,
            startD: e.target.startD.value,
            endD: e.target.endD.value
        });
        setExpanded(false);
    }


    return(
        <div className="infoBox">
            <div className="infoBoxHeader">
                Education Info
                <button className="expandBtn" onClick={() => expanded? setExpanded(false) : setExpanded(true)}>V</button>
            </div>
        
        { expanded &&
            <form className="infoBoxForm" onSubmit={handleSubmit}>
                <label htmlFor="school">School</label>
                <input defaultValue={educationInfo.school} type="text" name="school" id="school" />
                <label htmlFor="degree">Degree</label>
                <input defaultValue={educationInfo.degree} type="text" name="degree" id="degree" />
                <label htmlFor="startD">Start Date</label>
                <input defaultValue={educationInfo.startD} type="date" name="startD" id="startD"/>
                <label htmlFor="endD">Graduation Date</label>
                <input defaultValue={educationInfo.endD} type="date" name="endD" id="endD"/>
                <button type="submit">Save</button>

            </form>
        }        
        </div>
    )
}

export default EduInfo