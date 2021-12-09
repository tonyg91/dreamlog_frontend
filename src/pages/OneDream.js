import { Link, useParams } from "react-router-dom";

const OneDream = ({dreams, edit, deleteDream}) => {
    const params = useParams()
    const id = parseInt(params.id)
    const dream = dreams.find((dream) => dream.id === id)
    return (<div>
        <Link to="/">
        <button type="button" class="btn btn-info">Home</button>
        </Link>
        <button type="button" class="btn btn-primary" onClick={(event) => edit(dream)}>Edit Dream</button>
        <button type="button" class="btn btn-danger" onClick={(event) => deleteDream(dream)}>Delete Dream</button>
        <h1>{dream?.title}</h1>
        <h2>{dream?.description}</h2>
        <img src={dream?.image} alt="singledream"/>
        <h2>{dream?.date}</h2>
    </div>)
}
export default OneDream