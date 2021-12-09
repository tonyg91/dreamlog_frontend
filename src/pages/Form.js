import { useState } from "react";
import {useNavigate} from "react-router-dom"

const Form = ({initialDream, handleSubmit, buttonLabel}) => {
    const navigate = useNavigate()
    // Form state
    const [formData, setFormData] = useState(initialDream)

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        handleSubmit(formData)
        navigate("/")
    }
    return <form onSubmit={handleSubmission}>
      <input type="text" 
      onChange={handleChange} 
      value={formData.title} 
      name="title"
      placeholder="Title"/>
      <input type="text" 
      onChange={handleChange} 
      value={formData.description} 
      name="description"
      placeholder="Description"/>
      <input type="text" 
      onChange={handleChange} 
      value={formData.image} 
      name="image"
      placeholder="Image URL"/>
      <input type="text" 
      onChange={handleChange} 
      value={formData.date} 
      name="date"
      placeholder="Date"/>
      <input type="button" class="btn btn-warning" type="submit" value={buttonLabel}/>
    </form>
}
export default Form