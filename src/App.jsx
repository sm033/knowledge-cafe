
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Blogs from './Components/Header/Blogs/Blogs'
import Header from './components/Header/header'

function App() {

  return (
    <>
      <Header></Header>

      <div className='md:flex lg:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
