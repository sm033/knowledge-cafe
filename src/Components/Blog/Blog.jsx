import PropTypes from 'prop-types';
import {FaRegBookmark} from 'react-icons/fa';
                
     const Blog = ({blog, handleAddBookMark,handleRead }) => {
     const {id,cover,title,author ,author_img,reading_time,posted_date,hashtags} = blog;
    return (
        <div className='mb-8 space-y-6'>
            <img className='rounded-xl  w-full shadow-2xl' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex mt-8'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='text-base font-semibold text-[#11111163]'>{posted_date}</p>
                    </div>
                </div>
                {/* reading time */}
                <div className='mt-8'>
                    <span className='text-xl font-semibold text-[#11111163]'>{reading_time} min read</span>
                    <button 
                        onClick={() => handleAddBookMark(blog)} 
                        className='text-[#11111163] font-bold ml-3 text-xl hover:text-red-400'>
                        <FaRegBookmark></FaRegBookmark> 
                    </button>
                </div>
            </div>

            <h2 className="text-[2.5rem] font-bold mt-4">{title}</h2>
            <p className='mt-4'>
                {
                    hashtags.map((hash,idx) => <span className='font-semibold text-xl mr-2 text-[#11111163]' key={idx}> <a href="">#{hash}</a> </span>)
                }
            </p>

               
            <button onClick={() => 
            handleRead(id,reading_time)} 
            className='text-[#6047EC] font-semibold underline hover:text-purple-400'>
                Mark as read</button>
        </div>
    );
};


Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAddBookMark:PropTypes.func  ,
    handleRead:PropTypes.func
}
export default Blog;