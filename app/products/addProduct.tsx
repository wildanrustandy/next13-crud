'use client'
import {SyntheticEvent, useState } from "react"
import { useRouter } from "next/navigation"

export default function AddProduct() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [modal, setModal] = useState(false)

    const router = useRouter()

    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        await fetch('http://localhost:4000/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: title,
                price: price
            })
        });
        setTitle("");
        setPrice("");
        router.refresh();
        setModal(false)
    }

    function handleChanges() {
        setModal(!modal)
    }

    return (
        <div>
            <button className="btn" onClick={handleChanges}>Add New</button>

            <input type="checkbox" checked={modal} onChange={handleChanges} className="modal-toggle" />

            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add New Product</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label font-bold">Product Name</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="input w-full input-bordered" placeholder="Product Name" />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">Price</label>
                            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="input w-full input-bordered" placeholder="Price" />
                        </div>
                        <div className="modal-action">
                            <button className="btn" type="button" onClick={handleChanges}>Close</button>
                            <button className="btn btn-primary" type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}