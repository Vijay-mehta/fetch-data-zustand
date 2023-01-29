import './App.css';
import useStore from './Zustands/Zustand';
import React,{useEffect} from 'react'

function App() {

  const {users,getUsers} =useStore()
  console.log(users)

  useEffect(()=>{
    getUsers()
  },[])
  return (
    <div className="App">
      {
        users.length>0 &&(
          users.map((user)=>(
            < >
            <img src={user.image} style={{width:"200px"}}/>
{          user.category
}
            </>
          ))
        )
      }
 <h1>hello</h1>
    </div>
  );
}

export default App;
