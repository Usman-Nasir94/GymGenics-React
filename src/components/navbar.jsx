import { useState } from 'react';
import logo from '../assets/logo.svg'
import { Menu } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);


    return (
        <nav className='w-full bg-black h-22 p-3 text-white flex items-center justify-between md:px-10h-28'>
            <div >
                {logo && <img src={logo} alt="logo" className='w-30 md:w-36 lg:w-40' />}
            </div>

            <div className="hidden md:block bg-[#292929] max-h-20 p-2 rounded-xl w-fit m-4">
                <ul className="flex items-center gap-2 text-lg font-medium text-gray-400">

                    <li className="flex items-center gap-2 bg-white text-[#FF5722] px-6 py-3 rounded-xl cursor-pointer">
                        <span className="h-2 w-2 rounded-full bg-[#FF5722]"></span>
                        Home
                    </li>


                    <li className="px-6 py-3 hover:text-white transition-colors cursor-pointer">
                        Classes
                    </li>
                    <li className="px-6 py-3 hover:text-white transition-colors cursor-pointer">
                        About
                    </li>
                    <li className="px-6 py-3 hover:text-white transition-colors cursor-pointer">
                        Book
                    </li>
                </ul>
            </div>

            <div className='md:hidden'>
                <Menu />
            </div>

            {/* Mobile Drawer */}
            <div className={`fixed top-0 right-0 h-screen w-1/2 bg-[#121212] z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>

                {/* Close Button Header */}
                <div className="flex justify-end p-6">
                    <button className="cursor-pointer" size={32} onClick={() => setIsMenuOpen(false)} > X </button>
                </div>

                {/* Menu Links */}
                <ul className="flex flex-col items-center gap-10 mt-10 text-2xl font-medium">
                    <li className="text-[#FF5722] flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                        <span className="h-2 w-2 rounded-full bg-[#FF5722]"></span>
                        Home
                    </li>
                    <li className="text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Classes</li>
                    <li className="text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>About</li>
                    <li className="text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Book</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
