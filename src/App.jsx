
import UserOutput from './components/UserOutput'
import UserInput from './components/UserInput'
import './index.css'
import { Component } from 'react'



class App extends Component {

  state ={
    usernames:
      {username:'starboy'}
  
    
  }
  newUser=(e)=>
  this.setState({
    usernames:
      {username: e.target.value}
    })
   
    
    
    render() {
    return(
    <div className=' flex justify-center items-center flex-col gap-2 w-screen h-screen bg-gradient-to-r from-pink-500 to-pink-100'>
      <div className='other'>
      <UserOutput username={this.state.usernames.username}/>
      </div>
      <div>
      <UserInput change={this.newUser} ></UserInput>
      
      </div>

    </div>
  )}
}

export default App
