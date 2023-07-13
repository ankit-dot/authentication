import { React, useState } from 'react'
import axios from 'axios'

function Register() {

  const [name, setName] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function registerUser(ev) {
    ev.preventDefault();
  try{
   await  axios.post('/register',{
      name,
      email,
      password,
    });
   alert('Registratin successful. Now you can log in')
  }catch(error){
    alert('Registration Failed')
  }
}
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
        <form onSubmit={registerUser}>
          <input type="text" placeholder="name" 
          value={name}
          onChange={ev=> setName(ev.target.value)} />
          <input type="email" placeholder="email" 
          value={email}
          onChange={ev=> setEmail(ev.target.value)} 
           />
          <input type="password" placeholder="password" 
          value={password}
          onChange={ev=> setPassword(ev.target.value)} />

          <button>Sign up</button>


        </form>
        <p>You do have an account? Login</p>

      </div>

    </div>
  )
}

export default Register