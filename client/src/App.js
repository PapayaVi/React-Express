import React, { useEffect, useState } from 'react'

function App() {

  const [serverData, setServerData] = useState([{}])

  useEffect(() => {
    fetch("https://react-express-server-git-main-papayavis-projects.vercel.app/api").then( resp => resp.json() ).then( data => {
      setServerData(data)
    })
  }, [])
  return (
    <div className='App'> 
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

