"use client"
import { useState, useEffect } from "react"
import moment from "moment";


export default function Page() {
 const date_create =  moment().format("YYYY-MM-DD")
  const [name, setName] = useState('')
  const [date, setdate] = useState(date_create)
  const [mrng,setMrng] = useState('')
  const[evng,setEvng] = useState('')

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const submitData = {name,date,mrng,evng}

    try {
      const res = await fetch('/api/handleform',{
        method: 'POST',
        body: JSON.stringify(submitData),
        headers: {
          'content-type': 'application/json'
        }
      })
      // console.log(res)
      if(res.ok){
        console.log("ok")
    
      }else{
        console.log(res);
      }
    } catch (error) {
        console.log(error)
    }
    setName('')
    return (
      <div>
        alert(Form submitted Successfully);
      </div>    )
  
  }

  

  return (
    <div className=" h-screen flex items-center justify-center   p-8 m-8">
      <form onSubmit={handleSubmit} className="  justify-center items-center m-8">
        <div className=" justify-center items-center">
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter the name"
            onChange={e => setName(e.target.value)}
            className="  mb-5 border p-2 px-4 rounded outline-none "
          />
          <br></br>
          <input
            type="date"
            name="age"
            value={date}
            placeholder="Enter the age"
            onChange={e => setdate(e.target.value)}
            className=" mb-5 border p-2 px-4 rounded outline-none "
          />
          <br></br>
          <textarea
            // type="text"
            name="name"
            value={mrng}
            placeholder="Enter mng status"
            onChange={e => setMrng(e.target.value)}
            className=" mb-5 border p-2 px-4 rounded outline-none "
          ></textarea>
          <br></br>
          <textarea
            
            name="name"
            value={evng}
            placeholder="Enter evng status"
            onChange={e => setEvng(e.target.value)}
            className=" space-y-[5px] mb-5 border p-2 px-4 rounded outline-none ">
            </textarea>
          <br></br>
          <button 
          type="submit" 
          className=" border-blue-500 bg-blue-500 text-white p-2 px-4 rounded-md " 
          >Submit</button>
        </div>
      </form>
    </div>
  )
}
