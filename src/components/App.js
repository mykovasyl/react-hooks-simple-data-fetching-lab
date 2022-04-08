import React, { useEffect, useState } from 'react'

function App() {
  const [imageTag, setImageTag] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setImageTag(data.message)
        setIsLoaded(true)
      })


  }, [])//useEffect ends

  if (!isLoaded) return <p>Loading...</p>

  return <img src={imageTag} alt='A Random Dog' />

}//App ends



export default App