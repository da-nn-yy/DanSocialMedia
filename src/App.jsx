import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Main } from './Pages/Main';
import { Login } from './Pages/Login';
import {Navbar} from './component/navbar'

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
