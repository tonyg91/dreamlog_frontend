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
      <nav>
      <h1>Dream Log</h1>
      <Link to="/new">
        <button class="add">Add Dream <i class="bi bi-cloud-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-fill" viewBox="0 0 16 16">
        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
      </svg></i></button>
      </Link>
      <Link to="/">
        <button class="home">Home</button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<AllDream dreams={dreams}/>}/>
        <Route path="/dream/:id" element={<OneDream dreams={dreams} edit={getTargetDream} deleteDream={deleteDream}/>}/>
        <Route path="/new" element={<Form dreams={dreams} initialDream={nullDream} handleSubmit={addDreams} buttonLabel="Create Dream"/>}/>
        <Route path="/edit" element={<Form dreams={dreams} initialDream={targetDream} handleSubmit={updateDream} buttonLabel="Update Dream"/>}/>
      </Routes>
      <footer>
        <h3>Understaning Your Dream</h3>
      </footer>
    </div>
  );
}

export default App;
