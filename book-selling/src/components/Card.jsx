import './Card.css'
function Card({img, title}) {
    return (

        <div class="card-container">
            <img src={img} class="card-img-top" alt="..." />
            <h5 className="display-9 ">{title}</h5>
        </div>
    )
}
export default Card