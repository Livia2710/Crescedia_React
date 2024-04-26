import Playlist_1 from '../../assets/Ouça_agora.png';
import Playlist_2 from '../../assets/Frame 2.png';
import Playlist_3 from '../../assets/Talvez voce goste.png';
import Play from '../../assets/play.png';
import './home.css';

function App() {
  return (
    <div className="App">
      {/* Texto de Bem-Vindo (Descomentado para revisão)
      <section>
        <h1>SEJA BEM-VINDO 
        <br/>AO
        <span> CRESCENDIA</span>
        </h1>
      </section>
      */}

      {/* Playlists */}
      <div className="playlist">
        {/* Imagens */}
        <div className="imgs">
          <img src={Play} className='play' alt="Play button" />
          <img src={Playlist_1} alt="Ouça agora" />
        </div>

        <div className="imgs">
          <img src={Play} className='play' alt="Play button" />
          <img src={Playlist_2} alt="Frame 2" />
        </div>

        <div className="imgs">
          <img src={Play} className='play' alt="Play button" />
          <img src={Playlist_3} alt="Talvez você goste" />
        </div>
      </div>

      {/* Músicas */}
      <div id="container">
        <div className="titulo">
          <h2>Músicas</h2>
        </div>
        {/* Carousel */}
        <div className="carousel">
          <div className="item">
            <div className="image">
              {/* Adicionar a fonte da imagem no src abaixo */}
              <img src='' alt="capa da música" className="capa"/>
            </div>
            <div className="info">
              <h3 className='name'>Nome</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
