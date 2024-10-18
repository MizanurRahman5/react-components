import { useEffect, useState } from "react"

export default function Friend(){
    const [user, setUser] = useState([])
    useEffect(()=>{
        const fetchData = async() =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setUser(data)
        console.log(data)
        }
        fetchData()
    },[])
    return(
        <>
        
        <h1>friend : {user.length}</h1>
        
        </>
    )
}