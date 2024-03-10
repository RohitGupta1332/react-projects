import './Card.css'
function Card({img, title}) {
    return (

        <div className="card-container">
            <img src={img} className="card-img-top" alt="..." />
            <h5 className="display-6">{title}</h5>
        </div>
    )
}
export default Card