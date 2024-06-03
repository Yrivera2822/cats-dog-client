import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className= "d-flex justify-content-center align-items-center" >
        <Link to="/dogs">
        <div className="card" style={{width: "18rem"}}>

          <img src="https://i.pinimg.com/originals/0d/34/6e/0d346ecf65c578c8c7ec91ae97671a88.jpg"
              className="card-img-top" 
              alt="..."/>
    
             <div className="card-body text-center">
             <p className="card-text">
             Dogs are cool
          </p>
       </div>
     </div>
  </Link>
  <Link to="/cats">
     <div className="card" style={{width: "18rem"}}>
        

<img src="https://images.fineartamerica.com/images-medium-large-5/punk-cat-ken-tannenbaum.jpg"
    className="card-img-top" 
    alt="..."/>

   <div className="card-body text-center">
   <p className="card-text">
    Cats are cool.
</p>
</div>
</div>
</Link>
</div>
 

      
  )
}

export default HomePage
