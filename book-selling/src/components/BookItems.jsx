import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

function BookItems({ data }) {
    return (
        <div key={data.id} className="book-items">
            <img src={data.imgurl} alt="" />
            <Link className="details m-2 p-2">
                <h1>{data.name}</h1>
                <h4>by {data.author}</h4>
                <div className="price d-flex align-items-center">
                    <h1>₹{data.newprice}</h1>
                    <div className="d-flex align-items-center">
                        <h6>M.R.P</h6>
                        <h6 className="text-decoration-line-through">{data.oldprice}</h6>
                        <h6>&#40;{Math.round((data.oldprice-data.newprice) * 100 / data.oldprice)}%&#41;</h6>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default BookItems