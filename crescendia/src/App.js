
import Navbar from './components/layout/navbar.js'
import './App.css';
import Footer from './components/layout/footer.js'

function App() {

  return (

    <div className="App">
      < Navbar/>

      <body>

        {/* Texto de Bem-Vindo */}
        <section>
          <h1>SEJA BEM-VINDO 
          <br/>AO
          <span> CRESCENDIA</span>
          </h1>
        </section>
        {/* ________________________________________________ */}

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

        {/* _____________________________________________________________ */}
        {/* Musicas */}
        <div className="container">
          <div className="titulo">
          <h2>Músicas</h2>
          </div>
          {/* Carousel */}
          <div className="carousel">
            <div className="item">
              <div className="image">
                <img src='' className="capa"/>
              </div>
              <div className="info">
                <span className='name'>Nome</span>
              </div>
            </div>
          </div>
        </div>


      <Footer />
      </body>
    </div>

 
  );

}

export default App;
