import  Navbar  from './navbar'

const App = () => {

  return (
    
    <div className='flex flex-col items-center justify-center w-full md:w-3/4  h-screen gap-10 bg-gray-100'>
      <Navbar />
      <h1 className='text-4xl font-bold text-gray-800 '>GymGenics</h1>
    </div>
  )
}

export default App
