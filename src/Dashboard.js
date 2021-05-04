import React, {useEffect, useState} from 'react';
import firebase from './Config/Firebase'

const Dashboard = () => {
    const [productName, setProductName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [product, setProduct] = useState([])
    const [button, setButton] = useState("SAVE")
    const [selectedProduct, setSelectedProduct] = useState({})

    useEffect(() => {
        firebase.database().ref('products').once('value', (res) => {
            if(res.val()) {
                const rawData = res.val()
                const productArr = []
                Object.keys(rawData).map(item => productArr.push({
                    id: item,
                    ...rawData[item],
                }))
                setProduct(productArr)
            }
        })
    },[])

    const resetForm = () => {
        setProductName("")
        setCategory("")
        setPrice("")
        setButton("save")
        setSelectedProduct({})
    }

    const onSubmit = () => {
        const data = {
            productName: productName,
            category: productName,
            price: parseFloat(price),
        }
        if(button === 'save'){
            firebase.database().ref("products").push(data)
        }else{
            //Update
           // firebase.database().ref(`product/${selectedProduct.id}`).set(data)
            firebase.database().ref('product').child(selectedProduct.id).update(data)
        }
        
        resetForm()
    }

    const onUpdate = (item) => {
        setProductName(item.productName)
        setCategory(item.category)
        setPrice(item.price)
        setSelectedProduct(item)
        setButton("Update")
    }

    const onDelete = (item) => {
        firebase.database().ref(`product/${item.id}`).remove()
    }

    return(
    <div className="container mt-5">
        <h3>Dashboard</h3>
        <div className="col-4">
            <p>Product Name</p>
            <input className="form-control" placeholder="Tuliskan nama produk anda" value={productName} onChange={(e)=>setProductName(e.target.value)}/>
            <p>Category</p>
            <input className="form-control" placeholder="Tuliskan kategori" value={category} onChange={(e)=>setCategory(e.target.value)}/>
            <p>Price</p>
            <input className="form-control" placeholder="Harganya" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <br/>
            <button className="btn btn-primary" onClick={onSubmit}>{button}</button>
            {button === "Update" && (
                <button className="btn btn-warning" onClick={resetForm}>Cancel update</button>
            )}
        </div>
        <br/>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map((item) => {
                        return(
                        <tr key={item.id}>
                            <td>{item.productName}</td>
                            <td>{item.category}</td>
                            <td>{item.price}</td>
                            <td>
                                <button className="btn btn-success" onClick={() => onUpdate(item)}>Update</button>
                                <button className="btn btn-danger"onClick={() => onDelete}>Delete</button>
                            </td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    )
}

export default Dashboard;