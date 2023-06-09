import "./styles.css";
import Counter from "./Counter";
import {useState, useEffect} from 'react'

export default function App() {
  const USER_API = "https://randomuser.me/api/?results=20&page=0";
  const [user , setUser] = useState('')
  useEffect(()=>{
    const getUser = async()=>{
      const data = await fetch(USER_API)
      const userData = await data.json()
      console.log(userData.results)
      let i =-1;
      let color = true;
      const allUsers = userData.results.map((eachUser)=>{
        i++
        if(i%5===0){
          color = !color
        }
           //    return <h1 className={color===true?"red": 'blue'}  >{eachUser.name.title +" " + eachUser.name.first +" " + eachUser.name.last}</h1>
        return <h1 style={color===true?{ color: 'blue' }:{color:'red'}} >{eachUser.name.title +" " + eachUser.name.first +" " + eachUser.name.last}</h1>
      })
      setUser(allUsers)
    }
    getUser()
  },[])

  return (
    <div className="App">
      <div id="parent">
        <div id="child"></div>
      </div>
      <br />
      {user}
      <Counter count={2} />
      <button>Click Me</button>
    </div>
  );
}
