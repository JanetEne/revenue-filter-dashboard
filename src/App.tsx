import Appbar from './components/Appbar'
import Navbar from './components/Navbar'
import Transactions from './components/Transactions'

function App() {

  return (
    <div className='font-body'>
      <Navbar />
      <Appbar />
      <div className='flex justify-center mt-10'>
        <div className='container'>
          <Transactions />
        </div>
      </div>
    </div>
  )
}

export default App
