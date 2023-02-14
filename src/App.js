import logo from './logo.svg';
import './App.css';
import Header from './components/Pages/Header/Header';
import Started from './components/Pages/Started/Started';
import Students from './components/Pages/Students/Students';
import Cdetails from './components/Pages/Cdetails/Cdetails';
import Footer from './components/Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Started/>
     <Students/>
     <Cdetails/>
     <Footer/>
    </div>
  );
}

export default App;
