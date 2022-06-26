
import './App.css';
import Contador from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
  <>
    <Navbar />
    <ItemListContainer />
    <Contador stock={15}/>
  </>
  );
}

export default App;
