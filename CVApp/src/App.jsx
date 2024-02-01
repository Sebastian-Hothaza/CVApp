import './App.css'
import Header from './components/header'
import PerInfo from './components/perInfo' 
import EduInfo from './components/eduInfo'
import ExpInfo from './components/expInfo'
import LivePreview from './components/livePreview'
import { useState } from "react"

function App() {
  const [personName, setPersonName] = useState("");
  
  return (
      <>
      <Header/>
      <div className='userInfo'>
        <PerInfo personName={personName} setPersonName={setPersonName}/>
        <EduInfo/>
        <ExpInfo/>
      </div>
      <LivePreview  personName={personName}/>
      </>
  )
}

export default App
