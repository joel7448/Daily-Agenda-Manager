

function Navbar(){
return ( <nav className="navbar navbar-dark bg-dark">
<div className="container-fluid">
  <a className="navbar-brand">Agenda Planner</a>
  <form className="d-flex" role="search">
    <input className="form-control me-2" type="search" placeholder="Add Your Tasks 😉" aria-label="Search"/>
    <button className="btn btn-outline-primary" type="buttton">Add+</button>
  </form>
</div>

</nav>)

}

export default Navbar