import AllDream from "./pages/AllDreams";
import OneDream from "./pages/OneDream";
import Form from "./pages/Form"
import { useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate} from "react-router-dom";

function App() {
  const navigate = useNavigate()

  const url ="https://ag-masonite-dreamlog-backend.herokuapp.com/dream/"

  const [dreams, setDreams] = useState([])

  const nullDream = {
    title: "",
    description: "",
    image: "",
    date: ""
  };
  
  const [targetDream, setTargetDream] = useState(nullDream)
//////////////
// Functions
//////////////

  const getDreams = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setDreams(data)
  }

  const addDreams = async (newDream) => {
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDream),
    });
  
    // get updated list of dreams
    getDreams();
  };

  const getTargetDream = (dream) => {
    setTargetDream(dream)
    navigate("/edit")
  }

  const updateDream = async (dream) => {
    await fetch(url + dream.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dream)
    })
    getDreams()
  }

  const deleteDream = async (dream) => {
    await fetch(url + dream.id, {
      method: "delete",
    });
  
    // get updated list of dreams
    getDreams();
    navigate("/");
  };
//////////////
// useEffects
//////////////
  useEffect(() => {
    getDreams()
  }, [])

  return (
    <div className="App">
      <h1>Dream Log</h1>
      <Link to="/new"><button type="button" class="btn btn-success">Add Dream</button></Link>
      <Routes>
        <Route path="/" element={<AllDream dreams={dreams}/>}/>
        <Route path="/dream/:id" element={<OneDream dreams={dreams} edit={getTargetDream} deleteDream={deleteDream}/>}/>
        <Route path="/new" element={<Form initialDream={nullDream} handleSubmit={addDreams} buttonLabel="Create Dream"/>}/>
        <Route path="/edit" element={<Form initialDream={targetDream} handleSubmit={updateDream} buttonLabel="Update Dream"/>}/>
      </Routes>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
             <div class="carousel-item active">
              <img src="https://images.saatchiart.com/saatchi/986181/art/8008478/7075742-HSC00001-7.jpg" class="d-block w-50" alt="one"/>
             </div>
            <div class="carousel-item">
             <img src="https://i.pinimg.com/originals/8f/41/66/8f416696d943f089358b01f7a9c967c6.jpg" class="d-block w-50" alt="two"/>
            </div>
            <div class="carousel-item">
             <img src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/blogs/14045/images/fuLo2UZURGWU5N4D0IN3_Copy_of_Night_Beauty_72.jpg" class="d-block w-50" alt="three"/>
            </div>
         </div>
        </div>
    </div>
  );
}

export default App;
