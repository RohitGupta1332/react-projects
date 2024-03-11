import { useParams } from "react-router-dom"

function Books(){
    const { categoryName } = useParams()

    return (
        <div className="books-container">
            <div className="sidebar">

            </div>
            <div className="books">
                <h1>{categoryName}</h1>
            </div>
        </div>

    )
}
export default Books