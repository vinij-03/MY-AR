// import React from 'react'
import RegisterLogin from './RegisterLogin'
import { useContext } from 'react'
import { UserContext } from './UserContext'
import AppPage from './AppPage'


function Routes() {
    const { username } = useContext(UserContext)
    if (username) {
        return (
            <>
                <AppPage />
            </>
        )
    }
    return (
        <>
            <RegisterLogin />
        </>
    )
}

export default Routes