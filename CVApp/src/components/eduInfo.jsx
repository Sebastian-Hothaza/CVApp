import { useState } from "react"

function EduInfo({educationInfo, setEducationInfo}){
    const [expanded, setExpanded] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setEducationInfo({
            school:   e.target.school.value,
            degree:  e.target.degree.value,
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
                <button type="submit">Save</button>
            </form>
        }        
        </div>
    )
}

export default EduInfo