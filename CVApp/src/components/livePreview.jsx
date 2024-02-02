function LivePreview({personInfo, educationInfo, experienceInfo}){
    return(
        <div className="livePreview">
            <div>{personInfo.name}</div>
            <div>{personInfo.email}</div>
            <div>{personInfo.phone}</div>
            <div>{educationInfo.school}</div>      
            <div>{educationInfo.degree}</div> 
            <div>{experienceInfo.company}</div>
        </div>
    )
}

export default LivePreview
