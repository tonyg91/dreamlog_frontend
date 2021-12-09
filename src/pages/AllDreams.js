import Dream from "../components/dream"

const AllDream = (props) => {
    return props.dreams.map((dream) => <Dream dream={dream} key={dream.id} />)
}
export default AllDream