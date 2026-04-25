import logo from '../assets/logo.svg'
import { Menu } from 'lucide-react';

const Navbar = () => {
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
        </nav>
    )
}

export default Navbar
