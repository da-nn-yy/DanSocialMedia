import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Main } from './Pages/Main';
import { Login } from './Pages/Login';
import { Navbar } from './component/navbar'
import { CreatePost } from './Pages/create-post/create-post';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/createpost' element={<CreatePost/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
