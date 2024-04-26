// import React, { Component } from 'react';
// import './navbar.css';

// class Navbar extends Component {
//   state={clicked: false};
//   handelClick = () =>{
//     this.setState({clicked:!this.state.clicked})
//   }
//   render() {


//   return (
//     <>
//     <nav>
//       <a href="" alt="Logo"></a>

//       <ul id='navbar'>
//         <li><a href="">Seu perfil</a></li>
//         <li><a href="">Biblioteca</a></li>
//         <li><a href="">Assinaturas</a></li>
//       </ul>

//       <div id='mobile' onClick={this.handelClick}>
//         <p id='bar' className={this.state.clicked ? "O": "X"}></p>
    
//       </div>
//     </nav>

  
//     </>
//   );
// }

// }

// export default navbar


import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState(prevState => ({ clicked: !prevState.clicked }));
    }

    render() {
        return (
            <nav>
                <a href="#" alt="Logo"> 
                    <img src="path_to_logo.png" alt="Logo" /> 
                </a>

                <ul id="navbar" 
                className={this.state.clicked ? "#navbar active" : "navbar"}>
                    <li><a href="#">Seu perfil</a></li>
                    <li><a href="#">Biblioteca</a></li>
                    <li><a href="#">Assinaturas</a></li>
                </ul>

                <button id="mobile" onClick={this.handleClick} role="button"> 
                    <p id="bar" className={this.state.clicked ? "O" : "X"}></p>
                </button>
            </nav>
        );
    }
}

export default Navbar;
