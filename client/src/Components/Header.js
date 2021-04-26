import React from 'react'
import { useLocation } from 'react-router-dom'
import spices from '../spices.jpg'

const AppHeader = { flexBox: 'flex', textAlign: 'center', fontWeight: 900, fontStyle: 'italic', display: 'inlineBlock', margin: '100px' }


export const Header = () => {
    let location = useLocation()
    console.log(location)

    return (

        <div>
            {location.pathname == '/login' && <h1>Login</h1>}
            < div style={{ backgroundImage: `url(${spices})` }}>
                Hello World
    </div >
            <h1 style={AppHeader} >CODE & LIFE BALANCE</h1>
        </div>
    )
}

export default Header