import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/gaurav2dev')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])
    return (
        <div className=' text-center m-5 p-5 bg-gray-950 text-white text-3xl'>
            Name : {data.login}
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default Github


export const githubLoader = async () => {
    const response = await fetch("https://api.github.com/users/gaurav2dev")
    return response.json()
}
