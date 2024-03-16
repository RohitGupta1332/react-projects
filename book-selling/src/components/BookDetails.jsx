import { useEffect, useState } from "react";
import { getById } from "../hooks/getById";
import { useParams } from "react-router-dom";
function BookDetails(){
    const [data, setData] = useState(null)
    
    const params = useParams()
    const id = params.id

    useEffect(()=>{
        getById(id)
        .then(data => {
            console.log(data)
            setData(data)
        })
    },[id])

    if(!data){
        return (
            <h1>Loading...</h1>
        )
    }
    
    return(
        <div className="book-details-container">
            <img src={data.imgurl} alt="" />
            <div className="details">
                <h1>{data.name}</h1>
                <h1>{data.author}</h1>
                <h4>{data.description}</h4>
                <h6>{data.newprice}</h6>
                <h5>{data.oldprice}</h5>
                <button>Add to cart</button>
            </div>
        </div>
    )
}
export default BookDetails;