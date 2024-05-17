import './CSS/style.css'
import NavBar from './Components/NavBar';
import Router from './Router/Router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, faHeart, faCheck } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div>
     <NavBar />
      <Router />
    </div>
  );
}

export default App;