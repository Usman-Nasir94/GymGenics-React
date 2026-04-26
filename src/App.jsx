import  Navbar  from './components/navbar'
import Footer from './components/footer'
import FirstRide from './pages/firstRide'

const App = () => {

  return (
    
    <div className='flex flex-col items-center w-full h-screen gap-10 bg-gray-100'>
      <Navbar />
      <FirstRide />
      <Footer />
    </div>
  )
}

export default App
