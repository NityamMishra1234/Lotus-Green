import React ,{useState} from 'react'
import {Link ,NavLink} from 'react-router-dom'


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 w-full hidden lg:block ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="\Pg_Statics\pg LOGO.png" className="flex items-center">
                        <img
                            src="\Screenshot_2-12-2024_152312_www.canva.com.jpeg"
                            className="transform hover:scale-110 transition-transform mr-3 h-12 w-52 rounded-3xl  "
                            alt="Logo"
                        />
                    </Link>
                    
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to='/'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                        ${isActive ? 'text-orange-700' : 'text-gray-700'}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/What'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                        ${isActive ? 'text-orange-700' : 'text-gray-700'}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Visit us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/Contect'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                        ${isActive ? 'text-orange-700' : 'text-gray-700'}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contect_Us
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink
                                to='/Whoweare'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                        ${isActive ? 'text-orange-700' : 'text-gray-700'}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   Meet us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="bg-white w-full text-gray-900 md:hidden">
        <div className="max-w-screen-sm mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-lg font-bold">
            <img className="h-12 w-28 rounded-3xl" src="\Pg_Statics\pg_LOGO-removebg-preview.png" alt="" />
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} bg-white  text-sm`}>
          <ul className="space-y-2 px-4 py-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-1 hover:text-blue-300 ${
                    isActive ? 'text-orange-700' : 'text-gray-900'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/What"
                className={({ isActive }) =>
                  `block py-1 hover:text-blue-300 ${
                    isActive ? 'text-orange-700' : 'text-gray-900'
                  }`
                }
              >
                Visit us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Whoweare"
                className={({ isActive }) =>
                  `block py-1 hover:text-blue-300 ${
                    isActive ? 'text-orange-700' : 'text-gray-900'
                  }`
                }
              >
                Meet us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contect"
                className={({ isActive }) =>
                  `block py-1 hover:text-blue-300 ${
                    isActive ? 'text-orange-700' : 'text-gray-900'
                  }`
                }
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>    
        </header>
    );
}

