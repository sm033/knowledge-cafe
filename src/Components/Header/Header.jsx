import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex p-6  items-center justify-between border-b-2  max-w-7xl mx-auto'>
            <h1 className="text-[2.5rem] font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;