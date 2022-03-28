import React, { useState } from 'react'

export const AddItem = ({ addItem }) => {

    const [item_name, setItemName] = useState("");
    const [price, setPrice] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!item_name || !price) {
            alert("Item Name or Price cannot be blank");
        }
        else {
            addItem(item_name, price);
            setItemName("");
            setPrice("");
        }
    }

    return (
        <div className='container my-3'>
            <h3>Add an Item</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="item_name" className="form-label">Item Name</label>
                    <input type="text" value={item_name} onChange={(e) => setItemName(e.target.value)}
                        className="form-control" id="item_name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}
                        className="form-control" id="price" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Item</button>
            </form>
        </div>
    )
}
