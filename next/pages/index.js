import Head from 'next/head'
import Nav from '../components/Nav'
import { useState } from 'react'

export default function Home() {

  const [content, setContent] = useState([]);
  const [value, setValue] = useState('');

  const fetchContent = async () => {
    const response = await fetch('api/content')
    const data = await response.json()
    setContent(data)
  }
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/content', {
      method: 'POST',
      body: JSON.stringify({ value }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    setContent(data)
    console.log(data)
  }

  return (
    <>
      <Head>
        <title>Ulrik's page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
        <Nav/>
        <div>
          <h2>API</h2>
          <button onClick={fetchContent}>Fetch API data</button>
          {content.map(random => {
            return(
              <>
              <p>{random.title}</p>
              <p>{random.content}</p>
              </>
            )
          })}
        </div>
        <form onSubmit={handleSubmit}>
        <label id="content">Add content to API </label>
        <input 
        onChange={handleChange} 
        value={value} 
        type="text"
        name="content"
        id="content"
        ></input>
        <button>POST to API</button>
        </form>
      </>
  )
}