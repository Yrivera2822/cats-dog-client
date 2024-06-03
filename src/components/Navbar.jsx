import { Link } from "react-router-dom"

function Navbar() {
  return (
 <nav>
   
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        Perros y Gatos
    </a>
    
    <button 
    class="navbar-toggler" 
    type="button"
     data-bs-toggle="collapse" 
    data-bs-target="#navbarNavAltMarkup" 
    aria-controls="navbarNavAltMarkup"
     aria-expanded="false" 
     aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <Link class="nav-link active" aria-current="page" to="/">Homepage</Link>
      <Link class="nav-link active" aria-current="page" to="/cats">See Cats</Link>
      <Link class="nav-link active" aria-current="page" to= "/dogs">See Dogs</Link>
      <Link class="nav-link active" aria-current="page" to= "/about">About</Link>
        
      </div>
    </div>
  </div>
</nav>
</nav>
  )
}

export default Navbar
