import React, { Component } from 'react';
import './navbar.css';

class navbar extends Component {
  state={clicked: false};
  handelClick = () =>{
    this.setState({clicked:!this.state.clicked})
  }
  render() {


  return (
    <>
    <nav>
      <a href="" alt="Logo"></a>

      <ul id='navbar'>
        <li><a href="">Seu perfil</a></li>
        <li><a href="">Biblioteca</a></li>
        <li><a href="">Assinaturas</a></li>
      </ul>

      <div id='mobile' onClick={this.handelClick}>
        <p id='bar' className={this.state.clicked ? "O": "X"}></p>
    
      </div>
    </nav>

  
    </>
  );
}

}

export default navbar