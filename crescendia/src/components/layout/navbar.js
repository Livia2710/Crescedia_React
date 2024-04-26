import React, {useState} from "react";
import './navbar.css'

const Navbar = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div style={{width: '100%'}}>
            <nav>

                <div className="logo">
                    <img src="../" alt="" />
                </div>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}>

                <ul className="toggle">
                    <li ><a href="#" className="perfil">Usuario</a></li>
                    <li><a href="#">Planos</a></li>
                    <li><a href="#">Playlists</a></li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar


// import React, { Component } from 'react';
// import './navbar.css';

// class Navbar extends Component {
//     state = { clicked: false };

//     handleClick = () => {
//         this.setState(prevState => ({ clicked: !prevState.clicked }));
//     }

//     render() {
//         return (
//             <nav>
//                 <a href="#" alt="Logo"> 
//                     <img src="path_to_logo.png" alt="Logo" /> 
//                 </a>

//                 <ul id="navbar" 
//                 className={this.state.clicked ? "#navbar active" : "navbar"}>
//                     <li><a href="#">Seu perfil</a></li>
//                     <li><a href="#">Biblioteca</a></li>
//                     <li><a href="#">Assinaturas</a></li>
//                 </ul>

//                 <button id="mobile" onClick={this.handleClick} role="button"> 
//                     <p id="bar" className={this.state.clicked ? "O" : "X"}></p>
//                 </button>
//             </nav>
//         );
//     }
// }

// export default Navbar;