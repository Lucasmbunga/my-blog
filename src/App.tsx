import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import About from './pages/About/About'
import Categories from './pages/Categories/Categories'
import PostList from './components/PostList/PostList'
import DashboardMain from './pages/Dashboard/MainContent/MainContent'
import ImageUpload from './components/DashboardContainer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import CategoriesContent from './pages/Dashboard/CategoriesContent/CategoriesContent'
import PostsContent from './pages/Dashboard/PostsContent/PostsContent'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/dashboard' element={<Dashboard />} >

            <Route path='/dashboard/' element={<DashboardMain></DashboardMain>}></Route>
            <Route path='/dashboard/categories' element={<CategoriesContent />} />
            <Route path='/dashboard/posts' element={<PostsContent />}></Route>
          </Route>

          <Route path={"/about"} element={<About />} />
          <Route path={"/categories"} element={<Categories><PostList /></Categories>} />
          <Route path='/sign-in' element={<Login />} />
          <Route path='/sign-up' element={<Register />} />
          <Route path='/teste' element={<ImageUpload />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
