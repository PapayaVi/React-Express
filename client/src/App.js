import React, { useEffect, useState } from 'react'

function App() {

  const [serverData, setServerData] = useState([{}])

  useEffect(() => {
    fetch("/api").then( resp => resp.json() ).then( data => {
      setServerData(data)
    })
  }, [])
  return (
    <div>
      {
        (typeof serverData.users === 'undefined') ? ( <p>Fetching data...</p>) : 
        ( serverData.users.map((user, idx) => (
          <p key={idx}> {user} </p>
        ))
        )
      }
    </div>
  )
}

export default App

