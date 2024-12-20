
import { Input } from '@headlessui/react'

export const Navbar = () => {

      return (
        <div className="bg-white shadow-md h-[184px]">
                <div className="flex justify-between">
                    <div className="content-end pl-[100px]">
                        <a className='font-sans font-extrabold tracking-wide'>+1 (800) 312 - 2121</a>
                    </div>

                    <div>
                        <img src="src/assets/icons/Logo.svg" alt="icon" className="mt-8 h-16 text-gray-600" />
                    </div>

                    <div className='content-end w-[350px] pr-[100px]'>
                        <a className='font-sans font-extrabold tracking-wide'>172 14th Street, Office 503, NY</a>
                    </div>
                </div>

                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <ul className="flex space-x-12 pl-[100px]">
                            <li><a href="/" className="hover:text-gray-500 text-black">Home</a></li>
                            <li><a href="/products" className="hover:text-gray-500 text-black">Products</a></li>
                            <li><a href="/about" className="hover:text-gray-500 text-black">About</a></li>
                            <li><a href="/contact" className="hover:text-gray-500 text-black">Contact</a></li>
                        </ul>
                    </div>
                    

                    <div className='content-center pr-[320px] h-[38px]' >
                        <Input color='black' name="search" type="text" placeholder='Search' className="bg-neutral-100 border border-gray-300 rounded-full px-4 py-2 w-80"/>
                        
                    </div>

                    <div className='pr-[100px] flex items-center justify-center'>
                        <div className="relative inline-flex items-center justify-center rounded-full bg-[#F6DCDC] px-2 py-1 text-sm font-medium text-gray-500 w-[98px] h-[45px]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-8 h-8">
                            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                        </svg>

                        <span className= 'rounded-full bg-yellow-500 px-3 py-2 text-xs font-bold text-black ml-3 text-base'>
                            0
                        </span>
                            
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                        </svg>
                    </div>
                </div>
            </div>
      );
}