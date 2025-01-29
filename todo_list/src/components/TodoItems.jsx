import React from 'react';
import './TodoItems.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoItems({ items, setItems }) {

    const handleRemoveItem = (indexToRemove) => {
        setItems(prevItems => prevItems.filter((_, index) => index !== indexToRemove));
    };

    return (
        <>
            {items.map((item, index) => (
                <div className='row' key={index}>
                    <p className='col-5'>{item.input}</p>
                    <p className='col-4'>{item.date}</p>
                    <button className='col-2' onClick={() => handleRemoveItem(index)}>Remove</button>
                </div>
            ))}
        </>
    )
}

export default TodoItems;
