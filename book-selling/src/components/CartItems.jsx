import { useState } from 'react';

function CartItems({ data }) {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="cart-items">
            <div className="item-details">
                <img src={data.imgurl} alt="" />
                <h4>{data.name}</h4>
            </div>
            <div className="item-controls">
                <button onClick={decrementQuantity}>-</button>
                <input type="number" name="" id="" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} readOnly />
                <button onClick={incrementQuantity}>+</button>
            </div>
            <div className="item-price">
                <h4>{data.newprice}</h4>
            </div>
            <button type="button" className="btn-close" aria-label="Close"></button>
        </div>
    );
}

export default CartItems;
