import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
    return (
        <div className=' bg-orange-600  text-white text-3xl m-5 p-5 rounded-3xl'>
            User : {userid}

        </div>
    )
}

export default User
