import Logo from './logo.svg';
import Navbar from './components/layout/navbar.js'
import './App.css';

function App() {
  return (

    <div className="App">
      < Navbar/>

      <body>

        {/* Texto de Bem-Vindo */}
        <section>
          <h3><span>Seja Bem-Vindo</span></h3>
        </section>

        {/* Playlists */}

        <div className="playlist">

          {/* Imagens */}
          <div className="imgs">
            <img src="" alt="" />
          </div>

          <div className="imgs">
            <img src="" alt="" />
          </div>

          <div className="imgs">
            <img src="" alt="" />
          </div>

        </div>
      </body>


      
    </div>
    
  );

}

export default App;
