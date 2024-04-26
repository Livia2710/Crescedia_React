
import Navbar from './components/layout/navbar.js';
import Playlist_1 from './assets/Ouça_agora.png';
import Playlist_2 from './assets/Frame 2.png';
import Playlist_3 from './assets/Talvez voce goste.png'
import Play from './assets/play.png'
import Footer from './components/layout/footer.js';
import './App.css';

function App() {

  return (

    <div className="App">
      < Navbar/>

      <body>

        {/* Texto de Bem-Vindo
        <section>
          <h1>SEJA BEM-VINDO 
          <br/>AO
          <span> CRESCENDIA</span>
          </h1>
        </section> */}
        {/* ________________________________________________ */}

        {/* Playlists */}

        <div className="playlist">

          {/* Imagens */}
          <div className="imgs">
          <img src={Play} className='play' id='' />
            <img src={Playlist_1} alt="" />
            
          </div>

          <div className="imgs">
          <img src={Play} className='play' />
            <img src={Playlist_2} alt="" />
           
          </div>

          <div className="imgs">
          <img src={Play} className='play' />
            <img src={Playlist_3} alt="" />
         
          </div>

        </div>

        {/* _____________________________________________________________ */}
        {/* Musicas */}
        <div id="container">
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
                <h3 className='name'>Nome</h3>
              </div>
            </div>
          </div>
        </div>



      <Footer/>
      </body>
    </div>

 
  );

}

export default App;
