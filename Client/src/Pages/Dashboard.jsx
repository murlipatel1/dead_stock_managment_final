import React, { useState } from "react";
import SideBar from "../Elements/SideBar";
import '../Assets/Dashboard.css';
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import data from '../Assets/mock-data.json';

// import newd from '../Pages/new-data.json';
// import fs from
// const fs = require('fs');
// import Popup from "./fetchData";
const Dashboard = () => {
    const [Products, setProducts] = useState(data);
    let i = 5;
    const newFormm = [];
    // const form = document.getElementById('newproduct');
    const [addProduct, setProduct] = useState({
        "id": '',
        "Name": "",
        "ID": "",
        "Location": "",
        "Expiry": "",
        "Quantity": "",
        "Status": ""
    })
    const handleFormChange = (event) => {
        event.preventDefault();
        // const productName = event.target.getAttribute('productname');
        // const fieldValue = JSON.stringify(InputEvent.value);
        // const ID = event.currentTarget.getAttribute('productID');
        // const fieldID = event.currentTarget.value;
        // const loc = event.target.getAttribute('location');
        // const quant = event.target.getAttribute('quantity');
        // const opt = event.target.getAttribute('status-option');
        // const newData=[
        //     {
                
        // "id": "x",
        // "Name": " sdsd",
        // "ID" : "25IOC89",
        // "Location": "Warehouse 5, Batch 2",
        // "Expiry": " 1250 Days",
        // "Quantity": "569",
        // "Status": "In-Stock"
        //     }
        // ]
        // fs.writeFile("mock-data.json",JSON.stringify(newData),(err)=>{
        //     if(err) throw err;
        //     console.log("Done writing");
        // });
        
        
        let updatedValue = {};
        i++;
        updatedValue = {
            "id": i,
            "Name": document.getElementById('product_name').value,
            "ID":  document.getElementById('product_id').value,
            "Location":  document.getElementById('product_location').value,
            "Expiry": document.getElementById('product_expiry').value,
            "Quantity": document.getElementById('quantity').value,
            "Status": "a"
        }
        
        
        // console.log(event.target);

    //     const save =(data , file)=>{
    //     const finished =(e)=>{
    //         if(e){
    //             console.log(e)
    //             return;
    //         }
    //     }
    //     // const jsonData =JSON.stringify(data)
    //     // fs.writeFile(file ,jsonData , finished);
    // }

    // save(updatedValue , 'mock-data.json');

        setProduct({
            ...addProduct,
            ...updatedValue

        })
        // const newFormData = { ...addProduct };
        // newFormData[productName] = fieldValue;
        // setProduct(newFormData);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
         
        i++;
        let daat = {
            "id": i,
            "Name": document.getElementById('product_name').value,
            "ID": document.getElementById('product_id').value,
            "Location": document.getElementById('product_location').value,
            "Expiry": document.getElementById('product_expiry').value,
            "Quantity": document.getElementById('quantity').value,
            "Status": ""
        }
        
        newFormm.push(daat);
        console.log("THis is data")
        console.log(newFormm);
        const submitForm = {
            "id": i,
            "Name": addProduct.Name,
            "ID": addProduct.ID,
            "Location": addProduct.Location,
            "Expiry": addProduct.Expiry,
            "Quantity": addProduct.Quantity,
            "Status": addProduct.Status
        };
   
      
        const submitForms = [...Products, submitForm];
        setProducts(submitForms);
        console.log(submitForms);
        document.forms[0].reset();
         
    };

    
    



    // const {buttonPopup,setButtonPopup} = useState(false);
    // const addProduct = (e) =>{
    //     // setButtonPopup(true);
    //   e.preventDefault();
    //   const formData = new formData(e.target);
    //   const formDataObj = {};
    //   formData.forEach((value,key)=>(formDataObj[key]=value));
    //   console.log(formDataObj);

    // }
    const [searchTerm,setSearchTerm] = useState("");
    const products_disp = document.querySelector(".listt")
    const [switchToggled, setSwitchToggled] = useState(false)
    const ToggleSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true)
    if (switchToggled === true) {
      products_disp.classList.add("active")
      
    } else {
      products_disp.classList.remove("active")
       
    }
  }
    const Search = () => {
        console.log('search button clicked')
    }

    return (
        <>
            <SideBar />
            <div className="dashboard">
                <div className="upper-half">
                    <section className="scan-item">

                        <ul id="intro-text">
                            <li id="stock">Stock</li>
                            <li>Get notified on every update...</li>
                            <Link>
                                <li id="Scan-button"><button>
                                    Scan
                                </button>
                                </li>
                            </Link>
                        </ul>

                    </section>
                    <section className="add-item">
                        <div className="search-container">
                            <b>
                                <input type="text" placeholder="Search items..." id="hel" onChange={(event)=>{
                                    setSearchTerm(event.target.value);
                                    // console.log(event.target.value)
                                }}/>
                                
                                {data.filter((val)=>{
                                    if(searchTerm===""){
                                        return val
                                    }else if(val.Name.toLowerCase().includes(searchTerm.toLowerCase())){return val}
                                }).map((val,key)=>{
                                    return(<div className="user" key={key}>
                                        <br></br>
                                        {/* <p>{val.Name}</p> */}
                                        <div className="listt">
                        <table className="Products_display"  key="hello">
                            <tbody>
                                <tr>
                                    <th>No.</th>
                                    <th>Product Name/ID</th>
                                    <th>Location</th>
                                    <th>Expiry</th>
                                    <th>Quantity</th>
                                </tr>
                            </tbody>
                            <tbody>
                                    <tr>
                                        <td>
                                            {val.id}
                                        </td>
                                        <td>
                                            <Link to = '/ProductInfo'>{val.Name}</Link> : {val["ID"]}
                                        </td>
                                        <td>{val.Location}</td>
                                        <td>
                                            <span className="dot"></span>
                                            {val.Expiry}
                                        </td>
                                        <td>{val.Quantity}</td>

                                    </tr>
                            </tbody>
                        </table>
                    </div>
                                    </div>)
                                }
                                ) }
                            </b>
                            <b>
                                <button type="submit" onChange={ToggleSwitch} onClick={Search}><FaSearch /></button>
                            </b>

                        </div>

                    </section>
                </div>
                <hr />
                <div className="lower-half">
                    <div>
                        <div className="sort">
                            <label htmlFor="Products">Sort By: </label>
                            <select id="sort-options">
                                <option value="Expiry date">Expiry Date</option>
                                <option value="name">Name</option>
                                <option value="date added">date added</option>
                            </select>
                        </div>
                        <div className="toggle-button">
                            {/* check text */}
                        </div>
                    </div>
                    <div className="list">
                        <table className="Products" key="hello">
                            <tbody>
                                <tr>
                                    <th>No.</th>
                                    <th>Product Name/ID</th>
                                    <th>Location</th>
                                    <th>Expiry</th>
                                    <th>Quantity</th>
                                    <th>Status </th>
                                </tr>
                            </tbody>
                            <tbody>
                                {Products.map((Products) => (

                                    <tr>
                                        <td>
                                            {Products.id}
                                        </td>
                                        <td>
                                            <Link to = '/ProductInfo'>{Products.Name}</Link> : {Products["ID"]}
                                        </td>
                                        <td>{Products.Location}</td>
                                        <td>
                                            <span className="dot"></span>
                                            {Products.Expiry}
                                        </td>
                                        <td>{Products.Quantity}</td>

                                        <td>
                                            <select id="staus-options">
                                                <option value="In-stock">In-stock</option>
                                                <option value="Expiring soon">Expiring soon</option>
                                                <option value="Ordered">Ordered</option>
                                            </select>
                                        </td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* this is list eending */}
                </div>
                {/* this is lower half ending */}
                <div className="option-field">
                    {/* <h3>Add Product</h3> */}
                    <form id="newproduct" >
                        <input type="text" id="product_name" name="productname" required="reqired" placeholder="Product Name"
                            onChange={handleFormChange} />
                        <input type="text" id="product_id" name="productID" required="reqired" placeholder="Product ID"
                            onChange={handleFormChange} />
                        <input type="text" id="product_location" name="location" required="reqired" placeholder="Warehouse x , Batch y"
                            onChange={handleFormChange} />
                            <input type="text" id="product_expiry" name="expiry" required="reqired" placeholder=" abc Days"
                            onChange={handleFormChange} />
                        <input type="number" id="quantity" name="quantity" required="reqired" placeholder="Quantity"
                            onChange={handleFormChange} />

                        <select id="staus-options">
                            <option value="In-stock"
                                onChange={handleFormChange}>In-stock</option>
                            <option value="Expiring soon"
                                onChange={handleFormChange}>Expiring soon</option>
                            <option value="Ordered"
                                onChange={handleFormChange}>Ordered</option>
                        </select>
                    </form>
                    <div id="Add-product">
                        <button onClick={handleSubmit} type="submit" >Add Product</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;