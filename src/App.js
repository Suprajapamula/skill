
import Logo from './logo.svg';
import Music from './music.mp3';
import Video from './video.mp4';
function App() {
  return (
    <div style={{backgroundColor:"white", border:"1px solid black", textAlign:"center"}}>
     <h1 style={{color:"white"}}>Hello</h1>
     <img src={Logo} width={500} height={500} alt='img'/>
     <hr/>
     <audio controls>
        <source src={Music} type='audio/mp3'/>
      </audio>
      <hr/>
      <video controls width={320} height={450}> 
        <source src={Video} type='video/mp4'/>
      </video>
    </div>
  );
}

export default App;