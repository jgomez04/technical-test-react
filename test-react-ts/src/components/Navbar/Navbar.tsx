
import { Input } from '@headlessui/react'
import Logo from '../../assets/icons/Logo.svg'

export const Navbar = () => {

      return (
        <div className="bg-white shadow-md h-[184px]">
                <div className="flex justify-between">
                    <div className="content-end pl-[100px]">
                        <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#f7527a" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <a className='font-sans font-extrabold tracking-wide'>+1 (800) 312 - 2121</a>
                        </div>
                        
                    </div>

                    <div>
                        <img src={Logo} alt="icon" className="mt-8 h-16 text-gray-600" />
                    </div>

                    <div className='content-end w-[350px] pr-[100px]'>
                        <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#f7527a" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                        </svg>
                        <a className='font-sans font-extrabold tracking-wide'>172 14th Street, Office 503, NY</a>
                        </div>
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
                    
                    <div className="flex items-center bg-neutral-100 border border-gray-300 rounded-full px-4 py-2 mr-[300px]">
                        
                        <Input
                            name="search"
                            type="text"
                            placeholder="Search"
                            className="bg-neutral-100 outline-none border-none flex-1 px-2 w-80"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                            stroke="black"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1 0-10.61-10.61 7.5 7.5 0 0 0 10.61 10.61z"
                            />
                        </svg>
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