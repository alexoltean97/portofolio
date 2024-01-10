import Navigation from './components/portofolio/Navigation';
import CardGrid from './layout/CardGrid';
import Pagination  from './components/portofolio/Pagination';
import SingleProduct from './layout/SingleProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {


  return (
    <div class="container">
      <Navigation />
      <CardGrid />
      <Pagination />
      <SingleProduct />
    </div>
   
  )
}

export default App
