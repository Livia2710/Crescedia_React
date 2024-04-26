import React from 'react'
import style from './playlist.css'
import banner from '../../assets/banner.png'
import Navbar from './navbar'
import Footer from './footer'


const Playlist = () => {
    return(
    

    <div>
        <Navbar/>
        <div className="banner">
            <img src={banner} alt=''></img>
        </div>

    </div>
        
    );
}

export default Playlist