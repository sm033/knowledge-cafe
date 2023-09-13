
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Blogs from './Components/Blogs/Blogs'
import Header from './components/Header/header'
import { useState } from 'react'

function App() {
      const [bookmarks,setBookMarks] = useState([]);

      const [readingTime, setReadingTime] =useState(0);


       const handleAddBookMark = blog =>{
        const newBookmark = [...bookmarks,blog];
        setBookMarks(newBookmark);
     }

     const handleRead = (id,time) =>{
      setReadingTime(readingTime + time);
      // remove the read blog from bookmark
      const remainingBookmarks  = bookmarks.filter(bookmark => bookmark.id !== id);
      setBookMarks(remainingBookmarks);
     }

  return (
    <>
      <Header></Header>

      <div className='md:flex lg:flex max-w-7xl mx-auto mt-8 '>

        <Blogs handleAddBookMark={handleAddBookMark} handleRead={handleRead}></Blogs>
       
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
        
      </div>
    </>
  )
}

export default App
