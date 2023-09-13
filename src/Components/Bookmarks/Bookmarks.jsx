import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
    <div className='md:w-1/3 lg:w-1/3  ml-8 ' >

        <div className='bg-[#6047EC19]  rounded-lg  shadow text-center p-7 border border-[#6047EC] '>
            <h3 className='text-2xl font-bold text-[#6047EC]'>Spent time on read : {readingTime} </h3>
        </div>
    
        <div className=" bg-[#11110A0D] rounded-lg shadow ">
            <h2 className="text-2xl font-bold m-6 pt-4 justify-center">Bookmarked Blogs :{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }

        </div>
    </div>
     
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;