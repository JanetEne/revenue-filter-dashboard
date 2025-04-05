import Appbar from './components/Appbar'
import Container from './components/Container'
import Navbar from './components/Navbar'
import Transactions from './components/Transactions'
import Wallet from './components/Wallet'

function App() {

  return (
    <div className='font-body text-primary'>
      <Navbar />
      <Appbar />
      <div className='my-20'>
        <Container>
          <Wallet/>
          <Transactions />
        </Container>
      </div>
    </div>
  )
}

export default App
