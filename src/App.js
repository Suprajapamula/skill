
import './App.css';
import {Link, Outlet} from 'react-router-dom'
function App() {
  return (
    <div>
      <ul>
        <Link to="/home"><h1><li>Home</li></h1></Link>
        <Link to="/about"><h1><li>About</li></h1></Link>
        <Link to="/contact"><h1><li>Contact</li></h1></Link><br/>
      </ul>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
