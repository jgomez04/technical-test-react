import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import Grupo5 from './assets/images/Grupo5.png';


function App() {
  

  return (
    <>
      <Navbar />

  
      <div className='h-screen mt-1'>
      <div className="relative p-6 rounded-lg h-[700px] half-bg pl-[100px]">
        <div className='flex-col mt-20'>
          <h2 className="relative text-7xl font-bold text-gray-800 mt-12 w-[900px] font-serif">Surprise your favorite person</h2>
          <p className="relative text-gray-600 mt-6"><span className='font-extrabold text-pink-500 italic'>New</span> Rose arrangement with golden vase</p>
          <h3 className="relative mt-6 text-4xl font-extrabold text-pink-500 italic">$99.00</h3>
          <button className="relative mt-6 bg-[#ffaa01] hover:bg-[#ffaa01]-600 text-black font-bold py-2 px-4 rounded-full w-[240px]">Shop now</button>
        </div>
        
        <div className="absolute top-10 right-20">
          <img src={Grupo5} alt="icon" className='h-[500px] w-[500px]'/>
        </div>
      </div>
      </div>
      


      
    </>
  )
}

export default App
