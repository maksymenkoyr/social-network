import React from 'react'
import './App.scss'
import Header from '../Header/Header'
import MainNav from '../MainNav/MainNav'
import Profile from '../AppContent/Profile/Profile'
import Messenges from '../AppContent/Messenges/Messenges'

function App() {
    return (
        <div className='app'>
            <Header />
            <MainNav />
            {/* <Profile/> */}
            <Messenges/>

        </div>
    )
}

export default App
