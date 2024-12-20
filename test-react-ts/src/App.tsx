import './App.css'
import { Navbar } from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />

      <div className="relative flex h-screen">
        <div className='flex'>
          <p className="pl-[100px] mt-12 text-6xl font-bold text-black z-10 ">Surprise your favorite person</p>
          <img src="src/assets/images/Grupo5.png" alt="icon" className='w-[457px] h-[472px] mt-12'/>
        </div>
        
      </div> 
      
    </>
  )
}

export default App
