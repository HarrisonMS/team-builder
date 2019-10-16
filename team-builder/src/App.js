import React, { useState } from 'react';
import './App.css';
import MembersForm from "./Components/MembersForm"
import data from "../src/data"
import Members from "./Components/Members"


function App() {
  const [member, setMember] = useState(data)

  const addNewMember = note => {
    setMember([...member, note])
  }
  return (
    <div className="App">
      <h1>The Team</h1>
      <MembersForm addNewMember= {addNewMember}/>
      <Members member = {Members}/>
    </div>
  );
}

export default App;
