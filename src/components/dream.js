
const Dream = ({dream}) => {
    return <div>
        {/* <Link to={`/dream/${dream.id}`}>
            <h1>View Log</h1>
        </Link>
        <h1>{dream.title}</h1>
        <h2>{dream.date}</h2>
        <img src={dream.image} alt="dreampic"/> */}
        <div class="card">
         <img src={dream.image} class="card-img-top" alt="..."/>
          <div class="card-body">
           <h5 class="card-title">{dream.title}</h5>
           <p class="card-text">{dream.description}</p>
           <a href={`/dream/${dream.id}`} class="btn btn-primary">View log</a>
          </div>
        </div>
    </div>
}
export default Dream