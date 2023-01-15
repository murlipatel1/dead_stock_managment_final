import React, { useState } from "react";
import '../Assets/Messages.css';
import SideBar from '../Elements/SideBar';
import data from '../Assets/test-data.json';

const Messages = () =>{
    
    const [Details, setDetails] = useState(data);

    return(
        <>
        <SideBar key ="message"/>
        <div className="Messages">
            <div className="info-text">
                <div>Some items were expiring soon!</div>
                <hr />
            </div>
        <div>
        <section className="total-products">
            <p>Total items were </p>
            <p> 5 </p>    
        </section>    
        <hr />
        {Details.map((Details) => (
            <>
                <div className="Expiry-details">
                    <ul>    
                        <li id="Product-name">{ Details.Name }</li>
                            <ul>
                                <li>Product ID : { Details.ID }</li>
                                <li>Expiry : { Details.Expiry }</li>
                                <li>Status : { Details.Status }</li>
                                <li>Quantity : { Details.Quantity }</li>
                                <li>Location : { Details.Location }</li>
                            </ul>
                    </ul>

                </div>
                <div className="Expiry-period">
                    <h1>Expiring in</h1>
                    <h2>{ Details["Expiry-time"] }</h2>
                    try to sort this product !
                </div>
            </>
            ))}
            
            
        </div>
    
        </div>
        </>
    )
}

export default Messages;