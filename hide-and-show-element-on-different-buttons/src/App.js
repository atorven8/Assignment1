import "./styles.css";
import React from 'react'
export default function App() {
  const [status, setStatus] = useState(true)
  return (
    <div className="App">
    {
      status?  <h1>toggle me</h1>: null
    }
     
     <button onClick={()=>setStatus(false)}>
      Hide</button>
     <button onClick={()=>setStatus(true)}>
      Show</button> 
    <button onClick={()=>setStatus(!status)}>
      Toggle</button>
    </div>
  );
}
