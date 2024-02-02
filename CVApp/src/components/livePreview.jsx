function LivePreview({personInfo, educationInfo, experienceInfo}){
    return(
        <div className="livePreview">

            {personInfo.name &&
                <div className="personalInfo">
                    <div>{personInfo.name}</div>
                    <div>{personInfo.email}</div>
                    <div>{personInfo.phone}</div>
                </div>
            }

            {educationInfo.school &&
                <div className="educationInfo">
                    <h1>Education</h1>
                    <div className="schoolEntry">
                        <div>{educationInfo.school} - {educationInfo.degree}</div>
                        <div>{educationInfo.startD} to {educationInfo.endD}</div>
                    </div>
                </div>
            }

            
            {experienceInfo.company &&
                <div className="experienceInfo">
                    <h1>Experience</h1>
                    <div className="experienceEntry">
                        <div>{experienceInfo.company} - {experienceInfo.duties}</div>
                        <div>{experienceInfo.startD} to {experienceInfo.endD}</div>
                    </div>
                </div>
            }

            
        </div>
    )
}

export default LivePreview
