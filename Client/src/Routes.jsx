// import React from 'react'
import RegisterLogin from './RegisterLogin'
import { useContext } from 'react'
import { UserContext } from './UserContext'



function Routes() {
    const { username } = useContext(UserContext)
    if (username) {
        return ("logged in ")
    }
    return (
        <>
            <RegisterLogin />
        </>
    )
}

export default Routes