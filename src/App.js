
import Image from './reactlogo.jpeg';
import Logo from './logo.svg';
function App() {
  return (
    <div style={{backgroundColor:"black", border:"1px solid black", textAlign:"center"}}>
     <h1 style={{color:"white"}}>Hello</h1>
     <img src={Logo} width={500} height={500}/>
     <img src={Image} width={200} height={200}/>
    </div>
  );
}

export default App;
