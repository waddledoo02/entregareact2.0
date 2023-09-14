
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <>
  <NavBar></NavBar>
  <ItemListContainer></ItemListContainer>
  <ItemDetailContainer></ItemDetailContainer>

  </>
  )
  }
export default App