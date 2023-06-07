
import UserOutput from './components/UserOutput'
import UserInput from './components/UserInput'
import './index.css'



const App = () => {
  return (
    <div className='all'>
      <div className='other'>
      <UserOutput/>
      <UserOutput/>
      <UserOutput/>
      <UserOutput/>
      <UserOutput/>
      <UserOutput/>
      </div>
      <UserInput/>

    </div>
  )
}

export default App
