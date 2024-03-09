import { useContext } from "react"
import {CartContext} from '../context/CartContext'

function Cart(){
    const cart = useContext(CartContext)
    let totalPrice = cart.items.reduce((a, b) => a + b.price, 0)
    return (
        <div className="cart">
            {
                cart && cart.items.map((item => (
                    <li>{item.name} - {item.price}</li>
                    
                )))
            }
            <h3>Total Price: {totalPrice}</h3>
        </div>
    )
}
export default Cart