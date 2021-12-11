import {  useParams } from "react-router-dom";

const OneDream = ({dreams, edit, deleteDream}) => {
    const params = useParams()
    const id = parseInt(params.id)
    const dream = dreams.find((dream) => dream.id === id)
    return (<div class="onedisplay">
        {/* <Link to="/">
        <button type="button" class="btn btn-info">Home</button>
        </Link> */}
        <button type="button" class="btn btn-primary" id="edit" onClick={(event) => edit(dream)}>Edit Dream</button>
        <button type="button" class="btn btn-danger" id="delete" onClick={(event) => deleteDream(dream)}>Delete Dream</button>
        <h1>{dream?.title}</h1>
        <h2>{dream?.date}</h2>
        <h2>{dream?.description}</h2>
        <img class="singledream" src={dream?.image} alt="singledream"/>
        

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
    </div>)
}
export default OneDream