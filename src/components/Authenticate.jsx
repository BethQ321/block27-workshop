import { useState } from "react"


export default function Authenticate({token, setToken}) {
    const [successMessage, setSuccessMessage] = useState(null)
    const [error, setError] = useState(null)

    async function handleClick() {
        console.log("checking handleClick")
        try{
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", { 
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            })
            const result = await response.json()
            console.log(result)
            setSuccessMessage(result.message)
        }catch(error){
            setError(error.message)
        }
    }
        
    return (
        <div>
            <h2>Authenticate!</h2>
            { error ? <p>{error}</p> : ""}
            { successMessage ? <p>{successMessage}</p> : ""}
            <button onClick={handleClick}>Authenticate token</button>
        </div>
    )
}