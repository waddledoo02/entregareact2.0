
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<ItemListContainer></ItemListContainer>}/>
      <Route path='/item/:idProducto' element={<ItemDetailContainer></ItemDetailContainer>}/>
      <Route path='/categoria/:categoriaId' element={<ItemListContainer></ItemListContainer>}/>
      <Route path='/categoria/:categoriaId/item/:idProducto' element={<ItemDetailContainer></ItemDetailContainer>}/>
  </Routes>
  </BrowserRouter>

  </>
  )
  }
export default App