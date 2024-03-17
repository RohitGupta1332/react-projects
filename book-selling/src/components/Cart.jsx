import { useCart } from "../context/useCart"
import CartItems from "./CartItems";

function Cart() {
    const cart = useCart();
    console.log(cart.items);
    return (
        <div className="text-center">
            <h2 className="display-2">Your Cart</h2>
            <div className="container shadow p-3 mb-5 bg-body-tertiary rounded " style={{width:"50%", minWidth: "350px"}}>
            {
                cart.items.map(item => (
                    <CartItems data={item}></CartItems>
                ))
            }
        </div>
        </div>
    )
}
export default Cart