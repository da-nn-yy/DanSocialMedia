import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { MainTs } from './Pages/main/MainTs';
import { Login } from './Pages/Login';
import { Navbar } from './component/navbar'
import { CreatePost } from './Pages/create-post/create-post';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<MainTs/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/createpost' element={<CreatePost/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
