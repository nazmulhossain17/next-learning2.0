import logo from './logo.svg';
import './App.css';
import Header from './components/Pages/Header/Header';
import Started from './components/Pages/Started/Started';
import Choose from './components/Pages/Choose/Choose';
import Students from './components/Pages/Students/Students';
import Cdetails from './components/Pages/Cdetails/Cdetails';

function App() {
  return (
    <div className="App">
     <Header/>
     <Started/>
     <Choose/>
     <Students/>
     <Cdetails/>
    </div>
  );
}

export default App;
