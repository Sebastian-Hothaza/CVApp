import './App.css'
import Header from './components/header'
import PerInfo from './components/perInfo' 
import EduInfo from './components/eduInfo'
import ExpInfo from './components/expInfo'
import LivePreview from './components/livePreview'
import { useState } from "react"

function App() {
  const [personInfo, setPersonInfo] = useState({name: "", email: ""});
  
  return (
      <>
      <Header/>
      <div className='userInfo'>
        <PerInfo personInfo={personInfo} setPersonInfo={setPersonInfo}/>
        <EduInfo/>
        <ExpInfo/>
      </div>
      <LivePreview  personInfo={personInfo}/>
      </>
  )
}

export default App
