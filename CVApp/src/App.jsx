import './App.css'

import PerInfo from './components/perInfo' 
import EduInfo from './components/eduInfo'
import ExpInfo from './components/expInfo'
import LivePreview from './components/livePreview'
import { useState } from "react"

function App() {
  const [personInfo, setPersonInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState({});
  const [experienceInfo, setExperienceInfo] = useState({});
  
  
  return (
      <>
      <div className="header">CV App</div>
      <div className='userInfo'>
        <PerInfo personInfo={personInfo} setPersonInfo={setPersonInfo}/>
        <EduInfo educationInfo={educationInfo} setEducationInfo={setEducationInfo}/>
        <ExpInfo experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo}/>
      </div>
      <LivePreview  personInfo={personInfo} educationInfo={educationInfo} experienceInfo={experienceInfo}/>
      </>
  )
}

export default App
