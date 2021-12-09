import {Link} from "react-router-dom"
const Dream = ({dream}) => {
    return <div>
        <Link to={`/dream/${dream.id}`}>
            <h1>{dream.title}</h1>
        </Link>
        <h2>{dream.date}</h2>
        <img src={dream.image} alt="dreampic"/>
    </div>
}
export default Dream