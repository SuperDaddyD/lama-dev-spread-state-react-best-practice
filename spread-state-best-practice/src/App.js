
import React,{useState} from 'react';
import "./App.css"

function App() {
  const [input,setInput] = useState('');
  
  const [user,setUser] = useState({
    name:'',
    email:'',
    images:['profile.png','cover.png']
  })
  
  const handleInputChange=(e)=>{
     setInput(e.target.value)
  }

  const handleUser =()=>{
    setUser((prev)=>({
      ...prev,
      name:input
    }))
  }


  return (
    <div className="app">
      <h2>User:{user.name}</h2>
      <input type="text"
      onChange={(e)=>handleInputChange(e)}
       />
       <button className='btn_add' onClick={handleUser}>Change User</button>
        {user?.name && <p className="setUser">Username is :{user.name}</p>}
    </div>
  );
}

export default App;
