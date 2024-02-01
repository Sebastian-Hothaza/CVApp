function LivePreview({personInfo}){
    return(
        <div className="livePreview">
        {personInfo.name}
        {personInfo.email}
        </div>
    )
}

export default LivePreview
