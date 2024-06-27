import {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <nav className='text-gray-200 flex justify-between items-center max-w-[1240px]
         mx-auto h-24 px-4 text-l '>

            <h1 className='text-3xl font-bold  ml-4'>Portfolio</h1>
            <ul className='hidden md:flex z-50'>
                
                <li className='p-5'><a href='#portfolio'>Projects</a></li>
                <li className='p-5'><a href='#experience'>Experience</a></li>
                <li className='p-5'><a href='#about'>Skills</a></li>
                <li className='p-5'><a href='#contact' className='font-bold px-4 py-2 
                rounded-xl bg-primary-color'>Contact</a></li>
            </ul>

            <div onClick={handleNav} className='z-50 block md:hidden '>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>  

            <div className={nav ? 
            'z-50 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#1f1f35] ease-in-out duration-500' 
                                    : 'fixed left-[-100%]'}>
                <h1 className='text-3xl primary-color m-4'>Portfolio</h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-2'><a href='#portfolio' onClick={handleNav}>Projects</a></li>
                    <li className='p-2'><a href='#experience' onClick={handleNav}>Experience</a></li>
                    <li className='p-2'><a href='#about' onClick={handleNav}>Skills</a></li>
                    <li className='p-2'><a href='#contact' className='font-bold px-4 py-2 
                rounded-xl bg-primary-color' onClick={handleNav}>Contact</a></li>
                </ul> 
            </div>

        </nav>
    )
}

export default Navbar