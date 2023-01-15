import React, { useState } from "react";
import SideBar from "../Elements/SideBar";
import '../Assets/History.css';
import { FaSearch } from "react-icons/fa";
import data from '../Assets/History-data.json';

const Histroy = () => {

    const Search = () => {
        console.log('Search button is clicked')
    }
    
    const [ItemDetails, setItemDetails] = useState(data);

    return(
        <>
        <SideBar key = "history" />
            <div className="History">
                <div className="upper-half">
                    <div className="left-upper-half">
                            <ul id="left-texts">
                                <li id="Stock"> Stock</li>
                                <li>Get notified on every update...</li>
                            </ul>
                        <div className="left-lower-half">
                            <div className="search-bar">
                                <div id="Search">
                                    <input type="text" placeholder="Search items..." />
                                    <button type="submit" onClick={Search}><FaSearch /></button>
                                </div>
                            </div>
                                    
                        </div>
                    </div>
                    <div className="right-upper-half">
                        <p>Your previous</p>
                        <h1 id="History">History</h1>
                    </div>
                </div>
                <hr />
                <div className="lower-half">
                    <div className="history-list">
                    <table className="Products" key ="product">
                        <tbody >
                            <tr >
                                <th>No.</th>
                                <th>Product Name</th>
                                <th>Product ID</th>
                                <th>Quantity</th>
                                <th>Date</th>
                                <th>Status </th>
                            </tr>
                            </tbody>
                            <tbody>
                                { ItemDetails.map((ItemDetails) => (
                                    // <>
                                    <tr>
                                        <td>{ ItemDetails.No }</td>
                                        <td>{ ItemDetails.Name }</td>
                                        <td>{ ItemDetails.ID}</td>
                                        <td>{ ItemDetails.Quantity }</td>
                                        <td>{ ItemDetails.Date }</td>
                                        <td>{ ItemDetails.Status }</td>
                                    </tr>    
                                    // </>
                                ))}
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Histroy;