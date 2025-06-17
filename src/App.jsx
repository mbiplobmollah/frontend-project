import { Routes , Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Favorites from './Pages/Favorites'
import Navbar from './components/Navbar'

function App() {
 
  
  
  return (
    <div>
      <div>
      <Navbar></Navbar>
      </div>
   <main className='main-content'>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/favorites' element={<Favorites />}/>
    </Routes>
   </main>
   </div>
  )
}


export default App
