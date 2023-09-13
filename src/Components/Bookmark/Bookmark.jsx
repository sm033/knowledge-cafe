import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-white rounded-xl p-6 shadow-2xl m-6'>
            <h3 className='text-lg font-semibold'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark:PropTypes.object 
}
export default Bookmark;