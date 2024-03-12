import { Link } from "react-router-dom"

function Card({ img, title }) {
    return (

        <Link className="card-container" to={`/categories/${title.toLowerCase()}`} style={{ textDecoration: 'none', color: "black"}}>
            <img src={img} className="card-img-top" alt="..." />
            <h5 className="display-6" style={{fontSize: "2vw"}}>{title}</h5>
        </Link>
    )
}
export default Card