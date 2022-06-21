import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [val,text]=useState([])
  const [inputtext,inp2]=useState("")
  let foo=()=>{
    text([...val,{id:val.length+1,name:`${inputtext}`,isdone:false}])
  }
  let but=(id)=>{
    let itemindex = val.findIndex((obj) => obj.id === id);
    text([...val]);
if(val[itemindex].isdone == true)
{
    val[itemindex].isdone =false;
  }

else if(val[itemindex].isdone==false)
    {
      val[itemindex].isdone=true;
    }
  
  }

  var del=(id)=>{
    let index=val.findIndex((obj)=>obj.id===id);
    val.splice(index,1);
     text([...val]);

  }

  return (
    <div >
  <nav className="navbar navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand">Agenda Planner</a>
    <form className="d-flex" role="search" id="form">
      <input className="form-control me-2" type="search" onChange={(e)=>inp2(e.target.value)} placeholder="Add Your Tasks 😉" aria-label="Search"/>
      <button className="btn btn-outline-primary" onClick={foo}  type="button">Add+</button>
    </form>
  </div>
 
</nav>

<ul>
  {
  val.map((x)=> {return <li type="none" className={x.isdone ? "mark-done": ""} >{x.name} <button className="b" onClick={()=>but(x.id)}>✔</button><button type="button"  className="btn-close" onClick={()=>del(x.id)} onclick aria-label="Close"></button>
  </li>
  
 })
  }
  
</ul>
</div>
   
  );
}

export default App;
