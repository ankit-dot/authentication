import {React ,useState} from 'react'
import Add from "../img/addAvatar.png"
import axios from 'axios'
import { Navigate } from 'react-router-dom';
function Login() {

  const [email ,setEmail]= useState('');
  const [password,setPassword]=useState('');
  const [redirect,setRedirect]=useState(false);

  async function handleLoginSubmit(ev){
    ev.preventDefault();
    try{
    await axios.post('/login', {email,password});
      alert("login succeful");
      setRedirect(true);
    }catch(e){
      alert("login failed");
    }
  }

  if(redirect){
    return <Navigate to = {'/'}/>
  }
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Lama Chat</span>
            <span className="title">Register</span>
            <form onSubmit={handleLoginSubmit}>
                
                <input type="email" placeholder="email"
                value={email} 
                onChange={ev=>setEmail(ev.target.value)}/>
                <input type="password" placeholder="password" 
                value={password} 
                onChange={ev=>setPassword(ev.target.value)}/>
                
                <button>Sign in</button>
            </form>
            <p>You don't have an account? Register</p>

        </div>
        
    </div>
  )
}

export default Login