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
        <button class="add">Add Dream</button>
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
