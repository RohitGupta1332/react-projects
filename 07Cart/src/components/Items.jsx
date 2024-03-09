import { useContext } from "react";
import {CartContext} from '../context/CartContext'

function Items({name, price}){
    const cart = useContext(CartContext)
    return (
        <div className="container">
            <h1>{name}</h1>
            <h3>€{price}</h3>
            <button onClick={() => cart.setItems([...cart.items, {name: name, price: price}])}>Add to cart</button>
        </div>
    )
}
export default  Items;