import { Link } from "react-router-dom"
const Dream = ({dream}) => {
    return <div>
        {/* <Link to={`/dream/${dream.id}`}>
            <h1>View Log</h1>
        </Link>
        <h1>{dream.title}</h1>
        <h2>{dream.date}</h2>
        <img src={dream.image} alt="dreampic"/> */}
        {/* Cloud affect source = https://codepen.io/Mark_Bowley/pen/xEbuI */}
          
        <div class="card">
         <img src={dream.image} class="card-img-top" alt="cardimage"/>
          <div class="card-body">
           <h5 class="card-title">{dream.title}</h5>
           <p class="card-text">{dream.description}</p>
           <Link to={`/dream/${dream.id}`}>
             <button class="view">View Log</button>
           </Link>
          </div>
        </div>
        <div id="background-wrap">
         <div class="x1">
            <div class="cloud"></div>
          </div>

            <div class="x2">
            <div class="cloud"></div>
            </div>

             <div class="x3">
          <div class="cloud"></div>
            </div>

            <div class="x4">
            <div class="cloud"></div>
              </div>

           <div class="x5">
            <div class="cloud"></div>
           </div>
           <div class="x6">
            <div class="cloud"></div>
           </div>
           <div class="x7">
            <div class="cloud"></div>
           </div>
           <div class="x8">
            <div class="cloud"></div>
           </div>
           </div>
           
           
    </div>
}
export default Dream